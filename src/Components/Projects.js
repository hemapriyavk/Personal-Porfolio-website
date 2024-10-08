// Projects.js
import React from 'react';
// import ProjectImage from "./img/project.jpg";

const projects = [
  {
    title: "HP Cloth Store",
    description: "Integrated user authentication, product management, and secure payment systems.",
    image: "https://raw.githubusercontent.com/hemapriyavk/E-Commerce-website-using-MERN-Stack/refs/heads/main/HP%20Cloth%20store.png",
    video: "",
    github: "https://github.com/hemapriyavk/E-Commerce-website-using-MERN-Stack",
    tools: ["MERN Stack", "Tailwind CSS"],
    demo: "https://e-commerce-website-frontend-silk.vercel.app/"
  },
  {
    title: "HP Blogs",
    description: "CRUD functionality for blog posts, along with pagination and search capabilities",
    image: "https://raw.githubusercontent.com/hemapriyavk/Blog_application_using_MERN_Stack/refs/heads/master/Output.png",
    video: "https://drive.google.com/file/d/1u6mmVosVeR2mfciChYU1yGj_6_uYb480/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Blog_application_using_MERN_Stack.git",
    tools: ["MERN Stack", "Bootstrap"],
  },
  {
    title: "HP Chatbot",
    description: "Virtual Assistant - ability to handle basic conversational tasks",
    image: "https://raw.githubusercontent.com/hemapriyavk/Simple-chatbot-using-JavaScript/master/HP_Chatbot.png",
    video: "https://drive.google.com/file/d/1DYtVQC8oULquMBLuUQ9oLSLH-AWkefUW/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Simple-chatbot-using-JavaScript",
    tools: ["JavaScript", "HTML", "CSS"],
  },{
    title: "Coconest Eco Resort - Demo Website",
    description: "Coconest Eco Resort is a fully responsive demo website.",
    image: "https://raw.githubusercontent.com/hemapriyavk/Website-landing-page-using-React.js-01/master/Coconest.png",
    video: "https://drive.google.com/file/d/13G7tsuHFJCE2jCR5VX-hko9G6M_wiyg1/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Website-landing-page-using-React.js-01",
    tools: ["React.js"],
    demo: "https://website-landing-page-using-react-js-01-0202.vercel.app/"
  },{
    title: "Registration Form",
    description: "Register & Login form is a MERN stack project with user authentication.",
    image: "https://raw.githubusercontent.com/hemapriyavk/Register_Login_Form-using-MERN-Stack/master/Register_login_Form.png",
    video: "https://drive.google.com/file/d/1HJG5YZ_OoXsB6vpu1I5hamNhBf-FYojG/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Register_Login_Form-using-MERN-Stack",
    tools: ["MERN Stack", "Bootstrap"],
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.demo ? project.demo : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <div className="project-card">
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
                    <button className="btn-demo" onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.video, '_blank');
                    }}>
                      View Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;