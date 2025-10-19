import { promises as fs } from "fs";
import path from "path";
import { Lab } from "@/types/lab";

export async function getLabs(): Promise<Lab[]> {
  const labsDirectory = path.join(process.cwd(), "app", "newsletter");
  const entries = await fs.readdir(labsDirectory, {
    recursive: true,
    withFileTypes: true,
  });

  const labs = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name === "page.mdx")
      .map(async (entry) => {
        const labPath = path.join(entry.path, entry.name);
        const fileContent = await fs.readFile(labPath, "utf-8");

        // extract metadata from MDX file
        const metadataMatch = fileContent.match(
          /export const metadata = ({[\s\S]*?});/,
        );
        if (!metadataMatch) {
          throw new Error(`No metadata found in ${labPath}`);
        }

        // safely evaluate the metadata object
        const metadata = eval(`(${metadataMatch[1]})`);

        // get the slug from the directory name
        const slug = path.basename(path.dirname(labPath));

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
        } as Lab;
      }),
  );

  return labs.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
