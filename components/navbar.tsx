"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuItem } from "@/utils/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./theme-switcher";
import { Post } from "@/types/post";

export default function Navbar() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const allPosts = await response.json();
        const recentPosts = allPosts
          .filter((post: Post) => post.isPublished)
          .sort(
            (a: Post, b: Post) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime(),
          )
          .slice(0, 3);
        setPosts(recentPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  let menuItems: MenuItem[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Wakatime Stats",
      href: "/wakatime-stats",
    },
  ];

  if (posts.length) {
    menuItems = [
      ...menuItems,
      {
        name: "Recent Posts",
        href: "/blog",
      },
    ];
  }

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`relative py-2 text-base transition-colors hover:text-primary ${
            pathname === item.href
              ? "text-primary font-medium"
              : "text-muted-foreground"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <div className="flex w-full justify-between items-center">
          <div className="hidden lg:flex">
            <NavLinks />
          </div>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[280px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
