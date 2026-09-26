"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuItem, SocialIcon } from "@/utils/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeSwitcher from "./theme-switcher";
import { projects } from "@/data/projects";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const menuItems: MenuItem[] = [
    // { name: "Newsletter", href: "/newsletter" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    ...(projects.length > 0 ? [{ name: "Projects", href: "/projects" }] : []),
  ];

  const homeItem = { name: "John Apella", href: "/" };
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const socialIcons: SocialIcon[] = [
    {
      name: "Github",
      href: "https://github.com/apella1",
      icon: <FiGithub className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/johnapella",
      icon: <FiLinkedin className="h-5 w-5" />,
    },
    {
      name: "",
      href: "https://x.com/apella_john",
      icon: <FaXTwitter className="h-5 w-5" />,
    },
  ];

  const NavLinks = () => (
    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`relative py-2 text-base transition-colors hover:text-primary ${
            pathname === item.href ? "text-primary font-medium" : ""
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
          <section className="flex items-center space-x-2">
            <div className="hidden lg:flex">
              <Link
                key={homeItem.href}
                href={homeItem.href}
                className={`relative py-2 text-base transition-colors hover:text-primary ${
                  pathname === homeItem.href ? "text-primary font-medium" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {homeItem.name}
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              {socialIcons.map((socialIcon, index) => (
                <Link
                  key={socialIcon.href}
                  href={socialIcon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcon.icon}
                </Link>
              ))}
            </div>
          </section>

          <div className="flex justify-between space-x-4">
            <div className="hidden lg:flex">
              <NavLinks />
            </div>
            <ThemeSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[280px]">
                <div className="flex flex-col mt-8">
                  <Link
                    key={homeItem.href}
                    href={homeItem.href}
                    className={`relative text-base transition-colors hover:text-primary ${
                      pathname === homeItem.href
                        ? "text-primary font-medium"
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {homeItem.name}
                  </Link>
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
