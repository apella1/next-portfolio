import MDXWrapper from "@/components/mdx-wrapper";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <MDXWrapper>{children}</MDXWrapper>
    </article>
  );
}
