
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Footer from "./components/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Work from "./sections/Work/Work";
import Contact from "./sections/Contact/Contact";

import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
    </>
  );
}

function AppLayout() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/projects/");

  return (
    <div className="app">
      {!isProjectPage && <CustomCursor />}
      {!isProjectPage && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
        </Routes>
      </main>

      {!isProjectPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;