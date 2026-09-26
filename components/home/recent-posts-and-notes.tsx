import { Post } from "@/types/post";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface RecentPostsProps {
  posts: Post[];
  notes: Post[];
}

function formatDate(dateStr: string) {
  try {
    return format(parseISO(dateStr), "MMM d, yyyy");
  } catch {
    return dateStr;
  }
}

const RecentPostsAndNotes = ({ posts, notes }: RecentPostsProps) => {
  const recentPosts = posts
    .filter((post) => post.isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 4);

  const recentNotes = notes
    .filter((note) => note.isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 5);

  if (recentPosts.length === 0 && recentNotes.length === 0) {
    return null;
  }

  const featuredPost = recentPosts[0];
  const remainingPosts = recentPosts.slice(1);

  return (
    <section className="container space-y-6 py-8 md:py-10">
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Recent Articles and Notes
        </h2>
        <p className="text-muted-foreground">
          See{" "}
          <Link href="/blog" className="text-blue-500 hover:underline">
            Blog and Notes Archive
          </Link>{" "}
          for all entries.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left column: Latest Articles */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold border-b pb-2 mb-4">
            Latest Articles
          </h3>

          {featuredPost && (
            <div className="mb-6">
              {featuredPost.image && (
                <Link href={`/posts/${featuredPost.slug}`}>
                  <div className="relative w-full aspect-[16/9] mb-3 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              )}
              <Link
                href={`/posts/${featuredPost.slug}`}
                className="text-lg font-semibold text-blue-600 hover:underline leading-snug"
              >
                {featuredPost.title}
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                {formatDate(featuredPost.publishedAt)}
              </p>
              {featuredPost.description && (
                <p className="text-sm mt-1 text-foreground/80">
                  {featuredPost.description}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col gap-5">
            {remainingPosts.map((post) => (
              <div key={post.slug} className="flex gap-4 items-start">
                {post.image && (
                  <Link
                    href={`/posts/${post.slug}`}
                    className="shrink-0 w-24 h-16 relative overflow-hidden rounded-md bg-muted"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                )}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-blue-600 font-medium hover:underline leading-snug"
                  >
                    {post.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {formatDate(post.publishedAt)}
                  </p>
                  {post.description && (
                    <p className="text-sm text-foreground/80 mt-0.5 line-clamp-2">
                      {post.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Quick Notes */}
        <div className="lg:w-80 shrink-0">
          <h3 className="text-base font-semibold border-b pb-2 mb-4">
            Quick Notes
          </h3>
          <div className="flex flex-col divide-y">
            {recentNotes.map((note) => (
              <div key={note.slug} className="py-4 first:pt-0">
                <p className="text-xs text-muted-foreground mb-0.5">
                  {formatDate(note.publishedAt)}
                </p>
                <Link
                  href={`/notes/${note.slug}`}
                  className="text-blue-600 font-medium hover:underline leading-snug"
                >
                  {note.title}
                </Link>
                {note.description && (
                  <p className="text-sm text-foreground/80 mt-1 line-clamp-3">
                    {note.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPostsAndNotes;
