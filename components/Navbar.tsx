"use client";
import { useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { FiLinkedin } from "react-icons/fi";
import { RiCloseLine, RiMenu4Line, RiMenuLine } from "react-icons/ri";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const Menu = () => (
    <>
      <a
        href="/about"
        className="hover:bg-[#076115] hover:text-white py-2 px-4 rounded-md"
      >
        About
      </a>
      <a
        href="/skills"
        className="hover:bg-[#076115] hover:text-white py-2 px-4 rounded-md"
      >
        Skills
      </a>
      <a
        href="/projects"
        className="hover:bg-[#076115] hover:text-white py-2 px-4 rounded-md"
      >
        Projects
      </a>
      <a
        href="/blog"
        className="hover:bg-[#076115] hover:text-white py-2 px-4 rounded-md"
      >
        Blog
      </a>
      <a
        href="https://github.com/apella1"
        target="_blank"
        className="hover:bg-[#076115] hover:text-white py-2 px-3 rounded-2xl flex items-center space-x-2 border border-gray-300 p-4"
      >
        <DiGithubBadge className="text-2xl" />
        <p>Github</p>
      </a>

      <a
        href="https://linkedin.com/in/johnapella"
        target="_blank"
        className="hover:bg-[#076115] hover:text-white py-2 px-3 rounded-2xl flex items-center space-x-2 border border-gray-300 p-4"
      >
        <FiLinkedin />
        <p>LinkedIn</p>
      </a>
    </>
  );
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="flex items-center justify-between px-4 2xl:px-52 sm:px-16 lg:px-28 py-8 md:py-4 font-poppins">
      <section>
        <a href="/" className="text-2xl font-bold font-poppins">
          John Apella
        </a>
      </section>
      {/* menu */}
      <section className="flex items-center space-x-2 lg:space-x-4">
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Menu />
        </div>
        {/* mobile menu icons */}
        <div className="z-10 block lg:hidden">
          {isNavOpen ? (
            <RiCloseLine
              className="text-green-600 text-3xl absolute top-[1em] left-[2em]"
              onClick={toggleNavbar}
            />
          ) : (
            <RiMenu4Line
              className="text-green-600 text-3xl"
              onClick={toggleNavbar}
            />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            !isNavOpen
              ? "hidden"
              : "flex absolute inset-0 w-full h-screen z-{1} flex-col items-center pt-40 bg-[#1a202c] space-y-2 text-white"
          }
        >
          <Menu />
        </div>
        <ThemeSwitcher />
      </section>
    </nav>
  );
};

export default Navbar;
