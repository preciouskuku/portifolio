import React from 'react';
import './HireMe.css';

export default function HireMe() {
  return (
    <section className="hire-me">
      <h2>Hire Me</h2>
      <p>
        I'm a passionate frontend developer who turns ideas into sleek, responsive websites. 
        Open to internships, freelance gigs, or junior dev roles!
      </p>
      <a href="mailto:lynndev@example.com" className="btn">Get in Touch</a>
      <a href="/Lynn_Resume.pdf" className="btn secondary" target="_blank" rel="noreferrer">View Resume</a>
    </section>
  );
}
