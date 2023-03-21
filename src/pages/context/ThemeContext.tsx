import React, {
  createContext,
  PropsWithChildren,
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
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
    postThemeStatus();
  };

  const postThemeStatus = () => {
    const themeStatus = isDarkTheme ? "on" : "off";
    const bodyRequest = JSON.stringify({
      messageType: "designsystem",
      message: `Lights ${themeStatus} over at the Design System`,
      json: "{}",
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
