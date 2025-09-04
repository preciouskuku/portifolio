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
            I’m Precious, a versatile and driven Full-Stack Developer with hands-on experience
            in building scalable web applications using <strong>React, Node.js, Express, and PostgreSQL</strong>.
            I’m skilled in both frontend and backend development, with a strong foundation
            in database design, API integration, and responsive UI design.
          </p>
          <p>
            I enjoy working with tools like <strong>Supabase, Firebase, and GitHub</strong> for
            streamlined development and deployment. My passion lies in crafting
            user-centered solutions and exploring emerging technologies like <strong>AI</strong> and
            <strong> Cloud Computing</strong> to deliver impactful digital products.
          </p>

          <h3>Skills I Have</h3>
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
