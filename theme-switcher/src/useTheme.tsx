import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
