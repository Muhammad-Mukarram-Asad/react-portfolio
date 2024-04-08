import "./App.css";
import Navbar from "./components/Navigation";
// import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/Hero";
import SkillSection from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/projects";
import ContactMe from "./components/Contact";
import FooterSection from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <HeroSection />
        <SkillSection />
        <WorkExperience />
        <Projects />
        <ContactMe />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
