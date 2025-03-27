import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Apella | Fullstack Software Engineer",
  description:
    "Experienced Software Engineer specializing in React, Next.js, TypeScript, Kotlin, Java, and Spring Boot. I excel in building modern web applications within the JVM ecosystem, delivering seamless user experiences and high-quality code. Passionate about leveraging the latest technologies to drive project success and foster collaboration. Explore my portfolio to see how I can help elevate your next project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-32`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
