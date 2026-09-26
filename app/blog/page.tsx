import { getNotes } from "@/utils/notes";
import { getPosts } from "@/utils/posts";
import { Metadata } from "next";
import BlogClient from "./blog-client";

export const metadata: Metadata = {
  title: "John Apella | Blog and Notes",
};

const BlogPage = async () => {
  const [allPosts, allNotes] = await Promise.all([getPosts(), getNotes()]);

  return <BlogClient initialPosts={allPosts} initialNotes={allNotes} />;
};

export default BlogPage;
