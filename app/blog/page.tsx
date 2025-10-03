import { getPosts } from "@/utils/posts";
import BlogClient from "./blog-client";

const BlogPage = async () => {
  const allPosts = await getPosts();

  return <BlogClient initialPosts={allPosts} />;
};

export default BlogPage;