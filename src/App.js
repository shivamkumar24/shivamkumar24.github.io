import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Calender from "./Components/Calender";
import Stats from "./Components/Stats";
import Project from "./Components/Project";
import TechSkill from "./Components/TechSkill";
import MySkills from "./Components/MySkills";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Calender />
      <Stats />
      <Project />
      <TechSkill />
      <MySkills />
      <Chat />
    </div>
  );
}

export default App;
