"use client";
import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { BsSun } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode preference is set in localStorage
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
        <BsSun className="text-3xl" />
      ) : (
        <CiDark className="text-3xl" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
