// Projects.js
import React from 'react';
// import ProjectImage from "./img/project.jpg";

const projects = [
  {
    title: "HP Cloth Store",
    description: "Integrated user authentication, product management, and secure payment systems.",
    image: "https://raw.githubusercontent.com/hemapriyavk/E-Commerce-website-using-MERN-Stack/refs/heads/main/HP%20Cloth%20store.png",
    video: "https://drive.google.com/file/d/17wn4CCd4BatsopPVYDIKCbHo-vpA8mUE/view?usp=sharing",
    github: "https://github.com/hemapriyavk/E-Commerce-website-using-MERN-Stack",
    tools: ["MERN Stack", "Tailwind CSS"],
    demo: "https://hp-cloth-store-frontend.vercel.app/"
  },
  {
    title: "HP Blogs",
    description: "CRUD functionality for blog posts, along with pagination and search capabilities",
    image: "https://raw.githubusercontent.com/hemapriyavk/Blog_application_using_MERN_Stack/refs/heads/master/HP%20blogs.png",
    video: "https://drive.google.com/file/d/1d7jN6VGtRfIclmkJ-QqSS37edYW1_1f9/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Blog_application_using_MERN_Stack.git",
    tools: ["MERN Stack", "Bootstrap"],
    demo: "https://hp-blogs.vercel.app/"
  },
  {
    title: "Brainwave",
    description: "A responsive React-based UI/UX application focused on modern design and user experience.",
    image: "https://i.postimg.cc/vZ72dykH/Brainwave.png",
    video: "https://drive.google.com/file/d/1bNA131slDpP3a-1YTdr2E8XyRbZJ2vy6/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Brainwave-modern-ui-ux-react-application",
    tools: ["React.js", "Tailwind CSS"],
    demo: "https://brainwave-modern-ui-ux-react-application.vercel.app/"
  },
  {
    title: "Coconest Eco Resort - Demo Website",
    description: "Coconest Eco Resort is a fully responsive demo website.",
    image: "https://raw.githubusercontent.com/hemapriyavk/Website-landing-page-using-React.js-01/master/Coconest.png",
    video: "https://drive.google.com/file/d/13G7tsuHFJCE2jCR5VX-hko9G6M_wiyg1/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Website-landing-page-using-React.js-01",
    tools: ["React.js"],
    demo: "https://website-landing-page-using-react-js-01.vercel.app/"
  },
  {
    title: "Web Dev Company - Demo Website",
    description: "3D responsive website created using Three.js.",
    image: "https://raw.githubusercontent.com/hemapriyavk/3d-web-dev-design-company-sample-project/refs/heads/master/3D%20website%20-%20sample%20project.png",
    video: "https://drive.google.com/file/d/1eIIjtiyDUKTHGILUnv7CSDeDNvYM7tB1/view?usp=sharing",
    github: "https://github.com/hemapriyavk/3d-web-dev-design-company-sample-project",
    tools: ["Three.js", "React.js"],
    demo: "https://3d-web-dev-design-company-sample-project.vercel.app/"
  },{
    title: "3D Website - Sample Project",
    description: "3D model created using Blender 3D",
    image: "https://raw.githubusercontent.com/hemapriyavk/3d-website-room-sample-project/refs/heads/master/3D%20Room.png",
    video: "https://drive.google.com/file/d/1hi6cb1BqHvV5tO7DiAkErJsDdQhKfxeU/view?usp=sharing",
    github: "https://github.com/hemapriyavk/3d-website-room-sample-project",
    tools: ["Blender", "Three.js"],
  },{
    title: "HP Chatbot",
    description: "Virtual Assistant - ability to handle basic conversational tasks",
    image: "https://raw.githubusercontent.com/hemapriyavk/Simple-chatbot-using-JavaScript/master/HP_Chatbot.png",
    video: "https://drive.google.com/file/d/1DYtVQC8oULquMBLuUQ9oLSLH-AWkefUW/view?usp=sharing",
    github: "https://github.com/hemapriyavk/Simple-chatbot-using-JavaScript",
    tools: ["JavaScript", "HTML", "CSS"],
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