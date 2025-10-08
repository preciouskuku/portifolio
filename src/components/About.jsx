import React from 'react';
import './About.css';
import aboutpic from '../assets/about.jpg'; // Use the uploaded image

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I’m <strong>Precious</strong> — a passionate and versatile <strong>Full-Stack Developer</strong> 
            with a knack for building clean, scalable, and user-friendly web applications. 
            I specialize in modern technologies like <strong>React, Node.js, Express, and PostgreSQL</strong>, 
            and I enjoy working across both frontend and backend to bring ideas to life.
          </p>
          <p>
            Beyond the core stack, I often leverage tools such as <strong>Supabase, Firebase, and GitHub</strong> 
            to streamline development and deployment. I’m deeply interested in creating meaningful 
            digital experiences and exploring emerging technologies like <strong>AI</strong> and 
            <strong> Cloud Computing</strong> to solve real-world challenges.
          </p>

          <h3>Technical Skills</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>Next.js</li>
            <li>React Native</li>
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL / SQL</li>
            <li>HTML5</li>
            <li>CSS3 / Sass</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Git & GitHub</li>
            <li>UX/UI Design</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="about-img">
          <img src={aboutpic} alt="Precious - Full-Stack Developer" />
        </div>
      </div>
    </section>
  );
}
