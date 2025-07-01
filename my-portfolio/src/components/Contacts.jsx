import React from 'react';
import './Contacts.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact-page" id="contact">
      <h2>Let's Connect</h2>
      <p>
        I'm a frontend developer who builds clean, responsive web apps with personality.
        Open to internships, freelance work, or cool collabs.
      </p>

      <div className="contact-buttons">
        <a href="mailto:chigurilyncia@gmail.com" className="btn">Hire Me</a>
        <a href="/Lynn_Resume.pdf" className="btn secondary" target="_blank" rel="noreferrer">Download CV</a>
      </div>

      <div className="social-icons">
        <a href="https://github.com/lyncia22" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/Lyncia-Chiguri" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/lynci_a22" target="_blank" rel="noreferrer"><FaInstagram /></a>

      </div>

      <p>Email me directly at <a href="mailto:chigurilyncia@gmail.com">chigurilyncia@gmail.com</a></p>
    </section>
  );
}
