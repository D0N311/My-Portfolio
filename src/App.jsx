import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Jumbotron />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
