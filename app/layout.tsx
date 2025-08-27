import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Apella",
  description:
    "Sharpen your cloud and DevOps skills with practical, real-world labs. Learn Docker, Kubernetes, and cloud platforms through guided challenges",
  keywords: [
    "cloud labs",
    "DevOps labs",
    "hands-on cloud learning",
    "Docker labs",
    "Kubernetes labs",
    "GCP labs",
    "DevOps challenges",
    "cloud skills Africa",
    "cloud training",
  ],
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
