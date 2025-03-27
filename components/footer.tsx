"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const thisYear: string = new Date().getFullYear().toString();

const socialLinks = [
  {
    href: "https://github.com/apella1",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/johnapella",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/apella_john",
    icon: FaTwitter,
    label: "Twitter",
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full py-8">
      <div className="container px-4 md:px-6">
        <div
          className={cn(
            "flex items-center",
            pathname === "/" ? "justify-center" : "justify-between"
          )}
        >
          {pathname !== "/" && (
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            &copy; {thisYear} John Apella. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
