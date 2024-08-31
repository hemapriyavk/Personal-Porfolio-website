import React, { useState } from 'react';
import HireMeModal from './HireMeModel';
import AnimatedText from './AnimatedText';
import ContactDetails from "./file/Hemapriya_contact.vcf";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHireMeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='about'>
      <div className="home-content">
        <h1>Hi, I'm Hema Priya</h1>
        <h3>Aspiring <AnimatedText /></h3>
        <p>Dynamic and dedicated web developer with expertise in front-end and back-end technologies. Skilled in utilizing React.js and Three.js for creating dynamic and interactive user interfaces, alongside proficiency in Node.js and MongoDB for building robust server-side applications. Experienced in integrating payment gateways like Stripe for seamless e-commerce transactions. Seeking to leverage my comprehensive skill set and passion for web development to contribute effectively to a dynamic team and drive impactful projects forward.
        </p>
        <div className="btn-box">
          <button onClick={handleHireMeClick}>Hire Me</button>
          <a href={ContactDetails} download="Hemapriya_contact.vcf">Let's Talk</a>
        </div>
        <div className="icons">
          <a href="mailto:hemapriya2000mdu@gmail.com"><i className='bx bxl-gmail'></i></a>
          <a href="https://linkedin.com/in/hema-priya-b-777484154" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/hemapriyavk" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          {/* <a href="/#"><i className="bx bxl-discord"></i></a> */}
      </div>
      </div>

      <HireMeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      
      <span className="image-hover"></span>
    </div>
    
  )
}

export default About;