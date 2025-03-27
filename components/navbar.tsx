"use client";
import { MenuItem } from "@/utils/types";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import ThemeSwitcher from "./theme-switcher";

const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Wakatime Stats",
    href: "/wakatime-stats",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const Menu = () => (
    <>
      {menuItems.map((item) => (
        <div
          key={item.href}
          className={`flex items-center justify-center ${
            item.href === pathname ? "px-[1px]" : "px-4"
          }`}
        >
          <a
            href={item.href}
            className={`hover:decoration-blue-900 hover:underline hover:decoration-[4px] hover:underline-offset-4  py-2 rounded-md`}
          >
            {item.name}
          </a>
          {item.href === pathname && (
            <div className="self-center text-2xl font-black text-blue-900">
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
    <nav className="flex items-center py-8 md:py-4 font-poppins">
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
}
