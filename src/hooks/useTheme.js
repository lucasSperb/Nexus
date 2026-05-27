import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] =
    useState(
      localStorage.getItem("nexus-theme") ||
        "dark"
    );

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "nexus-theme",
      theme
    );
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );
  }

  return {
    theme,
    toggleTheme,
  };
}