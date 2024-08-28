"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className="mt-4 flex items-center">
      <Button
        size="icon"
        onClick={() => handleThemeChange(theme === "dark" ? "light" : "dark")}
      >
        <p>
          {theme === "dark" ? (
            <>
              <SunIcon />
            </>
          ) : (
            <>
              <MoonIcon />
            </>
          )}
        </p>
      </Button>
    </div>
  );
}
