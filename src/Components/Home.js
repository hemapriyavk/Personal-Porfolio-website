import React from 'react';
import About from './About';
import TechnicalSkill from './TechnicalSkill';
import Projects from './Projects';
import Contact from './Contact';

function Home({ showSection }) {
  return (
    <div className="home">
      <section id="about" style={{ display: !showSection || showSection === "about" ? "block" : "none" }}>
      <About />
      </section>
      
      <section id="skills" style={{ display: !showSection || showSection === "skills" ? "block" : "none" }}>
        <TechnicalSkill />
      </section>

      <section id="projects" style={{ display: !showSection || showSection === "projects" ? "block" : "none" }}>
        <Projects />
      </section>
      
      <section id="contact" style={{ display: !showSection || showSection === "contact" ? "block" : "none" }}>
        <Contact />
      </section>
    </div>
  );
}

export default Home;
