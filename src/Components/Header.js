import React, { useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import resume from "./file/Hemapriya_Resume.pdf";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
        <p className="logo">HP Creations</p>
        
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          <Link to="/skills" className={isActive('/skills') ? 'active' : ''}>Skills</Link>
          <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          
          <a href={resume} download="Hemapriya_resume.pdf" className='download-resume'>Download Resume</a> 
        </nav>
        
        <button className='menu-toggle' onClick={toggleMenu}>&#9776;</button>
        
    </header>
  );
}

export default Header;