import React from 'react';
import About from './About';
import TechnicalSkill from './TechnicalSkill';
import Projects from './Projects';
import Contact from './Contact';

function Home({ showSection }) {
  return (
    <div className="home">
      <section id="about" >
      <About />
      </section>
      
      <section id="skills">
        <TechnicalSkill />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
