import { promises as fs } from "fs";
import path from "path";
import { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "app", "posts");
  const entries = await fs.readdir(postsDirectory, {
    recursive: true,
    withFileTypes: true,
  });

  const posts = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name === "page.mdx")
      .map(async (entry) => {
        const postPath = path.join(entry.path, entry.name);
        const fileContent = await fs.readFile(postPath, "utf-8");

        // extract metadata from MDX file
        const metadataMatch = fileContent.match(
          /export const metadata = ({[\s\S]*?});/,
        );
        if (!metadataMatch) {
          throw new Error(`No metadata found in ${postPath}`);
        }

        // safely evaluate the metadata object
        const metadata = eval(`(${metadataMatch[1]})`);

        // get the slug from the directory name
        const slug = path.basename(path.dirname(postPath));

        return {
          title: metadata.title,
          slug,
          publishedAt: metadata.publishedAt,
          description: metadata.description,
          image: metadata.image,
          isPublished: metadata.isPublished ?? false,
          author: metadata.author,
          tags: metadata.tags ?? [],
          content: fileContent,
        } as Post;
      }),
  );

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
