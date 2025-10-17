export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto py-8 min-h-[80vh] max-w-3xl px-4">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        {children}
      </div>
    </article>
  );
}
