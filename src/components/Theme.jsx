import { useEffect, useState } from "react";

const Theme = () => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThemeMode(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === "dark" ? "light" : "dark";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div>
      <label
        htmlFor="check"
        className="relative bg-gray-300 dark:bg-gray-800 w-20 h-10 border rounded-full cursor-pointer"
      >
        <input
          type="checkbox"
          id="check"
          className="sr-only peer"
          checked={themeMode === "dark"}
          onChange={toggleTheme}
        />
        <span className="w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500"></span>
      </label>
    </div>
  );
};

export default Theme;
