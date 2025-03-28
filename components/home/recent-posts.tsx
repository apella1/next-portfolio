import PostCard from "../blog/post-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Post } from "@/types/post";

const RecentPosts = () => {
  const posts: Array<Post> = [];

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="container space-y-6 py-8 md:py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
        <Button asChild variant="outline" size="lg">
          <Link href="/posts">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
