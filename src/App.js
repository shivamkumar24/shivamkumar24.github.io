import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Calender from "./Components/Calender";
import Stats from "./Components/Stats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Calender />
      <Stats />
    </div>
  );
}

export default App;
