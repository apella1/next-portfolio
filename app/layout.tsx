import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Apella | Software Engineer | TypeScript Wizard",
  description:
    "Skilled Software Engineer specialized in React, Next.js and TypeScript. Experienced in building modern web applications with a strong focus on creating seamless user experiences. Passionate about delivering high-quality code and staying updated with the latest technologies. Ready to drive project success with my expertise and collaborative mindset.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <hr />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
