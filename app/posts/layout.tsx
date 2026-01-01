export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="py-8 min-h-[80vh] px-4">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        {children}
      </div>
    </article>
  );
}
