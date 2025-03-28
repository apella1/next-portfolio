import { Post } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

function formatDate(date: string | Date): string {
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  // If it's already in YYYY-MM-DD format, return as is
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return date;
  }
  // Try to parse the date and format it
  try {
    const parsed = new Date(date);
    return parsed.toISOString().split("T")[0];
  } catch (error) {
    console.error(`Error parsing date: ${date}`, error);
    return date;
  }
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        ...(data as Omit<Post, "slug" | "content">),
        publishedAt: formatDate(data.publishedAt),
        slug: fileName.replace(/\.mdx$/, ""),
        content,
      };
    });

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...(data as Omit<Post, "slug" | "content">),
      publishedAt: formatDate(data.publishedAt),
      slug,
      content,
    };
  } catch {
    return undefined;
  }
}
