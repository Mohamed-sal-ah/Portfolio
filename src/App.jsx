import "./App.css";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
const App = () => {
  return (
    <>
      <NavigationBar/>
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
      <SkillsPage/>
      <ContactPage/>
    </>
  );
};

export default App;
