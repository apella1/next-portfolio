import PostCard from "../blog/post-card";
import Link from "next/link";
import { Post } from "@/types/post";

interface RecentPostsProps {
  posts: Post[];
  notes: Post[];
}

const RecentPostsAndNotes = ({ posts, notes }: RecentPostsProps) => {
  const recentPosts = posts
    .filter((post: Post) => post.isPublished)
    .sort(
      (a: Post, b: Post) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  const recentNotes = posts
    .filter((post: Post) => post.isPublished)
    .sort(
      (a: Post, b: Post) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  if (recentPosts.length === 0 && recentNotes.length === 0) {
    return null;
  }

  return (
    <section className="container space-y-6 py-8 md:py-10">
      <div className="flex flex-col space-y-3">
        <h2 className="lg:text-2xl font-semibold tracking-tight">
          Recent Posts and Notes
        </h2>
        <p>
          See posts and notes{" "}
          <Link href="/blog" className="text-blue-500">
            archive
          </Link>{" "}
          for all entries.
        </p>
      </div>
      <section className="flex flex-col space-y-5 lg:flex-row space-x-6">
        <div className="grid gap-4">
          {recentPosts.slice(0, 1).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
          {recentPosts.slice(1).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="grid gap-4">
          {recentNotes.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default RecentPostsAndNotes;
