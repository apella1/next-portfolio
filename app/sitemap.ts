import { promises as fs } from "fs";
import { MetadataRoute } from "next";
import path from "path";

async function getPostSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(path.dirname(entry.path), entry.name),
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsDirectory = path.join(process.cwd(), "app", "posts");
  const slugs = await getPostSlugs(postsDirectory);

  // posts pages
  const posts = slugs.map((slug) => ({
    url: `/posts/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  // static routes
  const routes = ["", "/projects", "/blog", "/wakatime-stats"].map((route) => ({
    url: route,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
