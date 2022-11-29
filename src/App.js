import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
          <div>
              <Navbar />
              <Hero/>
              <Service />
              <Project />
              <Footer />
          </div>
  );
}

export default App;
