import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    if (!darkMode) {
      localStorage.setItem("darkMode", "darkMode");
    } else {
      localStorage.setItem("darkMode", "lightMode");
    }
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const darkModeStorage = localStorage.getItem("darkMode");
    if (!darkModeStorage && darkMode) {
      localStorage.setItem("darkMode", "darkMode");
    }

    if (darkModeStorage === "darkMode") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
