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

      if (!data.slug) {
        throw new Error(`Post ${fileName} is missing required 'slug' field in frontmatter`);
      }

      return {
        ...(data as Omit<Post, "content">),
        publishedAt: formatDate(data.publishedAt),
        content,
      };
    });

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    const posts = getAllPosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      return undefined;
    }

    // Find the actual file name by matching the slug
    const fileNames = fs.readdirSync(postsDirectory);
    const fileName = fileNames.find((name) => {
      const fullPath = path.join(postsDirectory, name);
      const { data } = matter(fs.readFileSync(fullPath, "utf8"));
      return data.slug === slug;
    });

    if (!fileName) {
      return undefined;
    }

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...(data as Omit<Post, "content">),
      publishedAt: formatDate(data.publishedAt),
      content,
    };
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return undefined;
  }
}
