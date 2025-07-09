import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="MainApp">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;