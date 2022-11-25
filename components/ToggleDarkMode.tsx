import { DarkMode } from "@assets/DarkMode";
import { LightMode } from "@assets/LightMode";
import { useState } from "react";
export const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // set dark mode with localStorage
  const setDarkModeWithLocalStorage = () => {
    darkMode
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setDarkModeWithLocalStorage();

    console.log(localStorage.getItem("theme"));
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleDarkMode}
        className="transition duration-200 ease-linear"
      >
        {darkMode ? <DarkMode /> : <LightMode />}
      </button>
    </div>
  );
};
