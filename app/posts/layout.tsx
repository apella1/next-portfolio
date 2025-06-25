import { ReactNode } from "react";

export default function PostLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="max-w-5xl mx-auto py-8">{children}</div>;
}
