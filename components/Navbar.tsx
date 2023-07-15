"use client";
import { useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { FiLinkedin } from "react-icons/fi";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const Menu = () => (
    <>
      <a
        href="/about"
        className="hover:bg-[#032cfc] hover:text-white py-2 px-4 rounded-md"
      >
        About
      </a>
      <a
        href="/skills"
        className="hover:bg-[#032cfc] hover:text-white py-2 px-4 rounded-md"
      >
        Skills
      </a>
      <a
        href="/projects"
        className="hover:bg-[#032cfc] hover:text-white py-2 px-4 rounded-md"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="hover:bg-[#032cfc] hover:text-white py-2 px-4 rounded-md"
      >
        Contact
      </a>
      <a
        href="https://github.com/apella1"
        className="hover:bg-[#032cfc] hover:text-white py-2 px-3 rounded-2xl flex items-center space-x-2 border border-gray-300 p-4"
      >
        <DiGithubBadge className="text-2xl" />
        <p>Github</p>
      </a>

      <a
        href="https://linkedin.com/in/john-apella"
        className="hover:bg-[#032cfc] hover:text-white py-2 px-3 rounded-2xl flex items-center space-x-2 border border-gray-300 p-4"
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
    <nav className="flex items-center justify-between px-4 2xl:px-52 md:px-16 lg:px-28 py-4 font-poppins">
      <section>
        <p className="text-2xl font-bold font-poppins">John Apella</p>
      </section>
      {/* menu */}
      <section>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Menu />
        </div>
        {/* mobile menu icons */}
        <div className="z-10 inline-block md:hidden">
          {isNavOpen ? (
            <RiCloseLine color="white" size={30} onClick={toggleNavbar} />
          ) : (
            <RiMenuLine color="white" size={30} onClick={toggleNavbar} />
          )}
        </div>
        {/* mobile menu */}
        <div
          className={
            !isNavOpen
              ? "hidden"
              : "flex absolute inset-0 w-full h-screen z-{1} flex-col items-center justify-center bg-[#23272F] space-y-2"
          }
        >
          <Menu />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
