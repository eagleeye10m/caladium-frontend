"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <IconMoon className="w-7 h-7 rounded-full shadow-lg p-1  cursor-pointer" />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <IconSun className="w-8 h-8 rounded-full shadow-lg p-1 cursor-pointer" />
        </button>
      )}
    </>
  );
}
