import React, { useEffect, useRef } from 'react';

import htmlIcon from './icon/html.png';
import cssIcon from './icon/css.png';
import jsIcon from './icon/js.png';
import reactjsIcon from './icon/react.png';
import mongodbIcon from './icon/mongodblogo.png';
import nodeIcon from './icon/node.webp';
import gitIcon from './icon/git.png';
import githubIcon from './icon/github-logo.png';
import reduxIcon from './icon/redux.png';
import mysqlIcon from './icon/mysql.png';
import graphqlIcon from './icon/graphql.png';
import bitbucketIcon from './icon/bitbucket.png';
import gitlabIcon from './icon/gitlab.png';

const TechnicalSkill = () => {
    const skillsRef = useRef([]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.progress-bar');
            const progress = progressBar.dataset.progress;
            
            progressBar.style.setProperty('--progress', `${progress}%`); 
            progressBar.classList.add('animated'); 
            observer.unobserve(entry.target); 
            }
        });
        });
    
        skillsRef.current.forEach(skill => {
        observer.observe(skill);
        });
    
        return () => {
        observer.disconnect(); 
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
                <img src={reduxIcon} alt="redux icon" />
                <img src={mongodbIcon} alt="mongodb icon" />
                <img src={mysqlIcon} alt="mysql icon" />
                <img src={nodeIcon} alt="node icon" />
                <img src={graphqlIcon} alt="graphql icon" />
                <img src={gitIcon} alt="git icon" />
                <img src={githubIcon} alt="github icon" />
                <img src={bitbucketIcon} alt="bitbucket icon" />
                <img src={gitlabIcon} alt="gitlab icon" />
            </div>
        </section>
        <section id="programming-languages">
            <h2>Programming Languages</h2>
            <div className="skill" ref={el => skillsRef.current[0] = el}>
                <p>React JS</p>
                <div className="progress-bar" data-progress="80"></div>
            </div>
            <div className="skill" ref={el => skillsRef.current[1] = el}>
                <p>Node JS</p>
                <div className="progress-bar" data-progress="70"></div>
            </div>
            <div className="skill" ref={el => skillsRef.current[2] = el}>
                <p>MongoDB</p>
                <div className="progress-bar" data-progress="85"></div>
            </div>
            <div className="skill" ref={el => skillsRef.current[3] = el}>
                <p>MySQL</p>
                <div className="progress-bar" data-progress="90"></div>
            </div>
           
        </section>
    </div>
  );
}

export default TechnicalSkill;