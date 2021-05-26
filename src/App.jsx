import "./App.css";
import React, { useContext } from "react";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import { ColorThemeContext } from "./components/ColorThemeContext";

const App = () => {
  const allContext = useContext(ColorThemeContext);
  const { colorTheme } = allContext;
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
