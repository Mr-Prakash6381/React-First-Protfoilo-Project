import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";



function App() {
  return (
    <div className="px-5 pb-5 container mx-auto ">
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
