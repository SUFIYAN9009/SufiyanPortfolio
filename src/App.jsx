import Navbar from "./components/Navbar/Navbar";
import CustomCursor from "./components/CustomCursor/CustomCursor";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Work from "./sections/Work/Work";
import Contact from "./sections/Contact/Contact";

import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;