import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import ReachOut from "./sections/ReachOut.jsx";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="max-w-7xl mx-auto">
              <Hero />
              <About />
              <Projects />
              <ReachOut />
            </main>
          }
        />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
};

export default App;
