"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastClickRef = useRef<number>(0);

  // enhanced mount detection with fallback
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // enhanced theme toggle with better debouncing and error handling
  const toggleTheme = useCallback(async () => {
    const now = Date.now();

    // prevent rapid successive clicks (debounce with 300ms)
    if (now - lastClickRef.current < 300) {
      return;
    }

    if (isChanging) return;

    lastClickRef.current = now;
    setIsChanging(true);

    // clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      // wait for any pending theme changes to settle
      await new Promise((resolve) => setTimeout(resolve, 50));

      // get current theme with more robust fallback logic
      let currentTheme = resolvedTheme;

      if (!currentTheme) {
        currentTheme = theme === "system" ? systemTheme : theme;
      }

      if (!currentTheme) {
        // final fallback - check document class or default to light
        currentTheme = document.documentElement.classList.contains("dark")
          ? "dark"
          : "light";
      }

      const newTheme = currentTheme === "dark" ? "light" : "dark";

      // force theme change
      setTheme(newTheme);

      // additional verification after theme change
      timeoutRef.current = setTimeout(() => {
        const actualTheme = document.documentElement.classList.contains("dark")
          ? "dark"
          : "light";
        if (actualTheme !== newTheme) {
          console.warn("Theme change verification failed, retrying...");
          // retry once if verification fails
          setTheme(newTheme);
        }
        setIsChanging(false);
      }, 150);
    } catch (error) {
      console.error("Theme toggle failed:", error);
      setIsChanging(false);
    }
  }, [theme, setTheme, resolvedTheme, systemTheme, isChanging]);

  // enhanced loading state that handles SSR better
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <div className="h-[1.2rem] w-[1.2rem] animate-pulse bg-muted rounded" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    );
  }

  // more robust theme detection with multiple fallbacks
  const getCurrentTheme = () => {
    if (resolvedTheme) return resolvedTheme;
    if (theme && theme !== "system") return theme;
    if (systemTheme) return systemTheme;

    // DOM-based fallback for production edge cases
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }

    return "light";
  };

  const currentTheme = getCurrentTheme();
  const isDark = currentTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      disabled={isChanging}
      className={`transition-all duration-200 ${
        isChanging ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-200" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform duration-200" />
      )}
      <span className="sr-only">
        {isChanging
          ? "Switching theme..."
          : `Toggle theme (currently ${currentTheme})`}
      </span>
    </Button>
  );
}
