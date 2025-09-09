import React, { useState, useEffect } from 'react';
import resume from "./file/Hemapriya_Resume.pdf";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <p className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >HP Creations</p>
      
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>About Me</a>
        <a href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a>
        <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>

        <a href={resume} download="Hemapriya_resume.pdf" className="download-resume">
          Download Resume
        </a>
      </nav>
      
      <button className="menu-toggle" onClick={toggleMenu}>&#9776;</button>
    </header>
  );
}

export default Header;
