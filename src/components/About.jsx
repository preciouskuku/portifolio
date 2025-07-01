import React from 'react';
import './About.css';
// import aboutpic from './assets/about.jpg'
; 

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam eos totam soluta nulla ut vero.
          </p>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, accusantium!
          </p>
          <h3>Skills that i have</h3>
          <ul className="skills-list">
            <li> React</li>
            <li> CSS3 / Sass</li>
            <li> JavaScript (ES6+)</li>
            <li> Git & GitHub</li>
            
          </ul>
        </div>

        <div className="about-img">
          <img src={aboutpic} alt=" about pic" />
        </div>
      </div>
    </section>
  );
}
