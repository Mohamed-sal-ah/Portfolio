import "./App.css";
import React, { useContext } from "react";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import { ColorThemeContext } from "./components/ColorThemeContext";
import theme from "./components/theme";

const App = () => {
  const allContext = useContext(ColorThemeContext);
  const { colorTheme } = allContext;
  document.body.style.backgroundColor =
    colorTheme === "light"
      ? theme.colors.white
      : theme.colors.black_blue.trinary;
  return (
    <>
      <NavigationBar colorTheme={colorTheme} />
      <HomePage colorTheme={colorTheme} />
      <ProjectsPage colorTheme={colorTheme} />
      <AboutPage colorTheme={colorTheme} />
      <SkillsPage colorTheme={colorTheme} />
      <ContactPage colorTheme={colorTheme} />
    </>
  );
};

export default App;
