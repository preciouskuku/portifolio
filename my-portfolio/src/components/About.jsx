import React from 'react';
import './About.css';
import aboutPic from '../assets/profile.jpeg'; // Optional personal image

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Lynn — a student and frontend developer who’s absolutely obsessed with turning ideas into clean, responsive, and interactive websites. Whether it’s a slick portfolio or a client-ready web app, I build with purpose and vibes.
          </p>
          <p>
            I specialize in crafting frontends with React, JavaScript, HTML & CSS. I also dabble in design, making sure everything not only works — but looks ✨chef's kiss✨ too.
          </p>
          <h3>Skills I’m Rockin’</h3>
          <ul className="skills-list">
            <li> React</li>
            <li> CSS3 / Sass</li>
            <li> JavaScript (ES6+)</li>
            <li> Responsive Design</li>
            <li> Git & GitHub</li>
            <li> Figma / UI Design</li>
          </ul>
        </div>

        <div className="about-img">
          <img src={aboutPic} alt="Lynn coding" />
        </div>
      </div>
    </section>
  );
}
