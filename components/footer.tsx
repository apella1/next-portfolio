"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import EmailOctopusFooterForm from "@/components/email-octopus-footer-form";

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
  return (
    <footer className="w-full py-8 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold">
              Subscribe to my newsletter
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get notified when new labs are out
            </p>
          </div>
          <div className="lg:col-span-2">
            <EmailOctopusFooterForm />
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
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
          <p className="text-sm text-muted-foreground">
            &copy; {thisYear} John Apella. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
