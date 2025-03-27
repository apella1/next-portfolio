"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const thisYear: string = new Date().getFullYear().toString();

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={cn(
        `flex items-center py-8`,
        pathname === "/" ? "justify-center" : "justify-between"
      )}
    >
      {pathname !== "/" && (
        <div className="flex items-center space-x-8 text-[18px]">
          <Link href="https://github.com/apella1" target="_blank">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/johnapella" target="_blank">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com/apella_john" target="_blank">
            <FaTwitter />
          </Link>
        </div>
      )}
      <p className={`self-center lg:p-2`}>&copy; {thisYear} John Apella</p>
    </footer>
  );
}
