import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = (): void => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
