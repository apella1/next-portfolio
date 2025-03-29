"use client";

import PostCard from "../blog/post-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Post } from "@/types/post";
import { useEffect, useState } from "react";

const RecentPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const allPosts = await response.json();
        const recentPosts = allPosts
          .filter((post: Post) => post.isPublished)
          .sort(
            (a: Post, b: Post) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime(),
          )
          .slice(0, 3);
        setPosts(recentPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return null;
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="container space-y-6 py-8 md:py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
        <Button asChild variant="outline" size="lg">
          <Link href="/blog">
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
