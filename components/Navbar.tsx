"use client";
import { MenuItem } from "@/utils/types";
import { useState } from "react";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Technologies",
    href: "/technologies",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const Menu = () => (
    <>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-center ${
            item.href === pathname ? "px-[1px]" : "px-4"
          }`}
        >
          <a
            href={item.href}
            className={`hover:decoration-[#076115] hover:underline hover:decoration-[4px] hover:underline-offset-4 hover:text-white py-2 rounded-md`}
          >
            {item.name}
          </a>
          {item.href === pathname && (
            <div className="self-center text-2xl font-black text-green-500">
              .
            </div>
          )}
        </div>
      ))}
    </>
  );
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="flex items-center px-4 py-8 2xl:px-72 sm:px-16 xl:px-28 md:py-4 font-poppins">
      <section className="flex items-center space-x-2 lg:space-x-4">
        <div className="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-4">
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
              className="text-3xl text-green-600"
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
