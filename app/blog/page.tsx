import { getPosts } from "@/utils/posts";
import BlogClient from "./blog-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "John Apella | Blog",
};

const BlogPage = async () => {
  const allPosts = await getPosts();

  return <BlogClient initialPosts={allPosts} />;
};

export default BlogPage;
