export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-5xl mx-auto py-8">{children}</div>;
}
