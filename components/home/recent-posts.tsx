import PostCard from "../blog/post-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Post } from "@/types/post";

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  const recentPosts = posts
    .filter((post: Post) => post.isPublished)
    .sort(
      (a: Post, b: Post) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section className="container space-y-6 py-8 md:py-10">
      <div className="flex items-center justify-between">
        <h2 className="lg:text-2xl font-semibold tracking-tight">
          Recent Posts
        </h2>
        <Button asChild variant="outline">
          <Link href="/blog">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4">
        {recentPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
