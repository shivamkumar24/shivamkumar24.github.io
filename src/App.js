import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Calender from "./Components/Calender";
import Stats from "./Components/Stats";
import Project from "./Components/Project";
import TechSkill from "./Components/TechSkill";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Chat from "./Components/Chat";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const techStackRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div ref={homeRef} className="App">
      <Navbar
        refs={{
          homeRef,
          aboutRef,
          experienceRef,
          projectRef,
          techStackRef,
          skillsRef,
          contactRef,
        }}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <TechSkill ref={techStackRef} />
      <Skills ref={skillsRef} />
      <Experience ref={experienceRef} />
      <Project ref={projectRef} />
      <Calender />
      <Stats />
      <Chat ref={contactRef} />
    </div>
  );
}

export default App;
