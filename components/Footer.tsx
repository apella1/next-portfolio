"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const thisYear: string = new Date().getFullYear().toString();

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <footer
      className={`flex items-center px-4 py-8 sm:px-16 xl:px-28 2xl:px-72 ${
        pathname === "/" ? "justify-center" : "justify-between"
      }`}
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
};

export default Footer;
