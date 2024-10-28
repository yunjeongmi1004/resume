import React from "react";
import About from "../components/About";
import Introduce from "../components/Introduce";
import PersonalHistory from "../components/PersonalHistory";
import ProjectHistory from "../components/ProjectHistory";
import Education from "../components/Education";
import Skill from "../components/Skill";

function HomeView() {
    return (
        <main>
        <About />
        <Introduce />
        <PersonalHistory />
        <ProjectHistory />
        <Education />
        <Skill />
        </main>
  
    );
  }

export default HomeView;