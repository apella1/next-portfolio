import { Post } from "@/types/post";
import { promises as fs } from "fs";
import path from "path";

export async function getNotes(): Promise<Post[]> {
  const notesDirectory = path.join(process.cwd(), "app", "notes");
  const entries = await fs.readdir(notesDirectory, {
    recursive: true,
    withFileTypes: true,
  });

  const notes = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name === "page.mdx")
      .map(async (entry) => {
        const entryDir = (entry as any).parentPath ?? (entry as any).path;
        const postPath = path.join(entryDir, entry.name);
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

  return notes.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
