import { Navbar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Apella | Frontend Software Engineer",
  description: "John Apella's official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <hr />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
