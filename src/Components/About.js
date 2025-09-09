import React, { useState } from "react";
import HireMeModal from "./HireMeModel";
import AnimatedText from "./AnimatedText";
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
    <div className="about">
      <div className="home-content">
        <h1>Hi, I'm Hema Priya</h1>
        <h3>
          Aspiring <AnimatedText />
        </h3>
        <p>
          Dynamic and dedicated Full Stack Developer with expertise in MERN
          stack technologies. Skilled in utilizing React.js, Redux, Bootstrap,
          Tailwind CSS for creating dynamic and interactive user interfaces,
          alongside proficiency in Node.js, Express.js, Rest APIs, Graphql,
          MySQL and MongoDB for building robust server-side applications.
          Experienced in integrating payment gateways like Stripe, paypal for
          seamless e-commerce transactions. Proficient in Google Maps Platform
          APIs, and database migrations, with a strong background in testing and
          documentation. Seeking to leverage my comprehensive skill set and
          passion for web development to contribute effectively to a dynamic
          team and drive impactful projects forward.
        </p>
        <div className="home-btns">
          <div className="btn-box">
            <button onClick={handleHireMeClick}>Hire Me</button>
            <a href={ContactDetails} download="Hemapriya_contact.vcf">
              Let's Talk
            </a>
          </div>
          <div className="icons">
            <a href="mailto:hemapriya2000mdu@gmail.com">
              <i className="bx bxl-gmail"></i>
            </a>
            <a
              href="https://linkedin.com/in/hema-priya-b-777484154"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://github.com/hemapriyavk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            {/* <a href="/#"><i className="bx bxl-discord"></i></a> */}
          </div>
        </div>
      </div>

      <HireMeModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <span className="image-hover"></span>
    </div>
  );
}

export default About;
