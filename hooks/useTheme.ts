"use client";

import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "darkMode";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const isDarkModePreferred =
      localStorage.getItem(LOCAL_STORAGE_KEY) === "true";
    setIsDarkMode(isDarkModePreferred);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme.toString());
    applyTheme(newTheme);
  };

  const applyTheme = (darkMode: boolean) => {
    const theme = darkMode ? DARK_THEME : LIGHT_THEME;
    document.documentElement.setAttribute("data-theme", theme);
  };

  return { isDarkMode, toggleTheme };
};
