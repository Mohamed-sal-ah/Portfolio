import React, { useContext, useState } from "react";

export const ColorThemeContext = React.createContext(null);

export const useColorTheme = () => {
  return useContext(ColorThemeContext);
};

export const ColorThemeProvider = ({ children }) => {
  const hasLocal = JSON.parse(localStorage.getItem("colorTheme"));
  const setLocalBool = hasLocal ? hasLocal.isDark : false;
  const [colorTheme, setColorTheme] = useState(
    !setLocalBool ? "light" : "dark"
  );
  const toggleTheme = () => {
    if (colorTheme === "light") {
      localStorage.setItem("colorTheme", JSON.stringify({ isDark: true }));
      setColorTheme("dark");
    } else {
      localStorage.setItem("colorTheme", JSON.stringify({ isDark: false }));
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
