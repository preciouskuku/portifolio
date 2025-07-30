import React from 'react';
import './About.css';
import aboutpic from '../assets/about.jpg'; // Adjust the path based on your folder structure

; 

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
           Versatile and driven Full-Stack Developer with experience in building scalable web applications using React, Node.js, Express, and PostgreSQL. Skilled in both frontend and backend development, with a strong foundation in database design, API integration, and responsive UI design. Experienced with tools like Supabase, Firebase, and GitHub for streamlined development and deployment. Passionate about creating user-centered solutions and exploring emerging technologies like AI and cloud computing to build impactful digital products
          </p>
          <h3>Skills that i have</h3>
          <ul className="skills-list">
            <li> React</li>
            <li> CSS3 / Sass</li>
            <li> JavaScript (ES6+)</li>
            <li> Git & GitHub</li>
            <li> UX/UI</li>
            <li> Python</li>
            <li>Next.js</li>
            <li>  React Native</li>
            <li> Express.js</li>
            <li> MongoDB</li>
            <li> MySQL</li>
            <li>SQL</li>
            <li>Html</li>
            <li> Tailwind CSS</li>
            <li> Bootstrap</li>
            
            
          </ul>
        </div>

        <div className="about-img">
          <img src={aboutpic} alt=" about pic" />
        </div>
      </div>
    </section>
  );
}
