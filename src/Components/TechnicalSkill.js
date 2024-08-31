import React, { useEffect, useRef } from 'react';

import htmlIcon from './icon/html.png';
import cssIcon from './icon/css.png';
import jsIcon from './icon/js.png';
import reactjsIcon from './icon/react.png';
import mongodbIcon from './icon/mongodblogo.png';
import nodeIcon from './icon/node.webp';
import gitIcon from './icon/git.png';
import githubIcon from './icon/github-logo.png';


const TechnicalSkill = () => {
    const skillsRef = useRef([]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            const progress = progressBar.dataset.progress;
            
            progressBar.style.setProperty('--progress', `${progress}%`); // Set custom property for progress
            progressBar.classList.add('animated'); // Add a class to trigger animation
            observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
        });
    
        skillsRef.current.forEach(skill => {
        observer.observe(skill);
        });
    
        return () => {
        observer.disconnect(); // Clean up the observer on component unmount
        };
    }, []);
    
  return (
    <div className='technical-skill'>
        <section className="horizontal-scroll">
            <h1>Technical Skill</h1>
            <div className="icon-container">
                <img src={htmlIcon} alt='html icon' />
                <img src={cssIcon} alt="css icon" />
                <img src={jsIcon} alt="javascript icon" />
                <img src={reactjsIcon} alt="react icon" />
                <img src={mongodbIcon} alt="mongodb icon" />
                <img src={nodeIcon} alt="node icon" />
                <img src={gitIcon} alt="git icon" />
                <img src={githubIcon} alt="github icon" />
            </div>
        </section>
        <section id="programming-languages">
            <h2>Programming Languages</h2>
            <div className="skill" ref={el => skillsRef.current[0] = el}>
                <p>React JS</p>
                <div className="progress-bar" data-progress="80"></div>
            </div>
            <div className="skill" ref={el => skillsRef.current[1] = el}>
                <p>MongoDB</p>
                <div className="progress-bar" data-progress="90"></div>
            </div>
            <div className="skill" ref={el => skillsRef.current[2] = el}>
                <p>Node JS</p>
                <div className="progress-bar" data-progress="60"></div>
            </div>
        </section>
    </div>
  );
}

export default TechnicalSkill;