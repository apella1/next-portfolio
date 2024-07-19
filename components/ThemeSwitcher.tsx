"use client";

import { useEffect, useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModePreferred = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDarkModePreferred);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("darkMode", newTheme.toString());
    applyTheme(newTheme);
  };

  const applyTheme = (darkMode: boolean) => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <BsSun className="text-3xl text-[#ffd700]" />
      ) : (
        <BsMoonFill className="text-2xl text-[#1a202c]" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
