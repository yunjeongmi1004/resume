import React, { useState }  from "react";
import About from "../components/About";
import Introduce from "../components/Introduce";
import PersonalHistory from "../components/PersonalHistory";
import ProjectHistory from "../components/ProjectHistory";
import Education from "../components/Education";
import Skill from "../components/Skill";

function HomeView() {

    const [isDark, setIsDark] = useState(false);

    return (
        <main className={`App ${isDark ? "dark" : ""}`}>
          <button className="theme" onClick={() => {setIsDark(!isDark);}}>
            {isDark ? "Light" : "Dark"}
            <em></em>
          </button>
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