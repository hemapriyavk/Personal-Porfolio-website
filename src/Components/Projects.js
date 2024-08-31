// Projects.js
import React from 'react';
// import ProjectImage from "./img/project.jpg";

const projects = [
  {
    title: "HP Chatbot",
    description: "Virtual Assistant - ability to handle basic conversational tasks",
    image: "https://raw.githubusercontent.com/hemapriyavk/Simple-chatbot-using-JavaScript/master/HP_Chatbot.png",
    video: "https://drive.google.com/file/d/1DYtVQC8oULquMBLuUQ9oLSLH-AWkefUW/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Simple-chatbot-using-JavaScript",
    tools: ["JavaScript", "HTML", "CSS"],
    // demo: "https://project-one.com"
  },{
    title: "Coconest Eco Resort - Demo Website",
    description: "Coconest Eco Resort is a fully responsive demo website.",
    image: "https://raw.githubusercontent.com/hemapriyavk/Website-landing-page-using-React.js-01/master/Coconest.png",
    video: "https://drive.google.com/file/d/13G7tsuHFJCE2jCR5VX-hko9G6M_wiyg1/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Website-landing-page-using-React.js-01",
    tools: ["React.js"],
    // demo: "https://project-one.com"
  },{
    title: "Registration Form",
    description: "Register & Login form is a MERN stack project with user authentication.",
    image: "https://raw.githubusercontent.com/hemapriyavk/Register_Login_Form-using-MERN-Stack/master/Register_login_Form.png",
    video: "https://drive.google.com/file/d/1HJG5YZ_OoXsB6vpu1I5hamNhBf-FYojG/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Register_Login_Form-using-MERN-Stack",
    tools: ["MERN Stack", "Bootstrap"],
    // demo: "https://project-one.com"
  },
  // Add more projects here
];

const Projects = () => {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={`${project.title}`} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tools && (
                <div className="project-tools">
                  <strong>Tools Used: </strong>
                  <span>{project.tools.join(", ")}</span>
                </div>
              )}
                <div className="project-buttons">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-code">
                      View Code
                    </a>
                  )}
                  {project.video && (
                    <button className="btn-demo" onClick={() => window.open(project.video, '_blank')}>
                      View Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;