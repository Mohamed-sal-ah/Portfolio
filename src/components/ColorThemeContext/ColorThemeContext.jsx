import React, { useContext, useState } from "react";

export const ColorThemeContext = React.createContext(null);

export const useColorTheme = () => {
  return useContext(ColorThemeContext);
};

export const ColorThemeProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("light");
  const toggleTheme = () => {
    if (colorTheme === "light") {
      setColorTheme("dark");
    } else {
      setColorTheme("light");
    }
  };
  const value = {
    colorTheme,
    toggleTheme,
  };
  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
};
