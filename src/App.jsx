import "./App.css";
import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AboutPage from "./components/AboutPage/AboutPage";
import HomePage from "./components/HomePage/HomePage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import ContactPage from "./components/ContactPage/ContactPage";
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
