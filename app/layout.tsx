import { Footer, Navbar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Apella | Frontend Software Engineer | TypeScript Wizard",
  description:
    "Skilled Frontend Software Engineer specializing in React, Next.js and TypeScript. Experienced in building modern web applications with a strong focus on creating seamless user experiences. Passionate about delivering high-quality code and staying updated with the latest technologies. Ready to drive project success with my expertise and collaborative mindset.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
