export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto py-8 min-h-[80vh]">{children}</div>;
}
