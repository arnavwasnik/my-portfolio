import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Internships from './components/Internships';
import Education from './components/Education';
import Extracurricular from './components/Extracurricular';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />

      <section className="about-section">
        <About />
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <Skills />
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <Projects />
      </section>

       <section className="Internships-section">
        <Internships />
      </section>

       <section className="Education-section">
        <h2>Education</h2>
        <Education />
      </section>

         <section className="Extracurricular-section">
        <h2>Extracurricular</h2>
        <Extracurricular />
      </section>

      <section className="Resume-section">
        <h2>Resume</h2>
        <Resume />
      </section>

        <section className="Contact-section">
        <h2>Contact</h2>
        <Contact />
      </section>
    </div>
  );
}

export default App;
