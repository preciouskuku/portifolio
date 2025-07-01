import React from 'react';
import './Contacts.css';
import { FaGithub, FaLinkedin, FaInstagram ,FaFacebook} from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact-page" id="contact">
      <h2>Let's Connect</h2>
      <p>
       "I'm a passionate and curious tech enthusiast currently specializing in web development. I enjoy building user-friendly digital solutions that solve real-world problems. My recent projects include a Crop Disease Detection App designed to support farmers with AI-powered diagnosis. I'm always learning and exploring new technologies to grow as a developer and make a meaningful impact through code.
      </p>

      <div className="contact-buttons">
        <a href="mailto:preciouskukumute@gmail.com" className="btn">Hire Me</a>
       
      </div>

      <div className="social-icons">
        <a href="https://github.com/preciouskuku" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="www.linkedin.com/in/precious-k-mutema" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/yo_kids_its.ice_queen/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/preciouskuku.mutema/" target="_blank" rel="noreferrer"><FaFacebook /></a>
      </div>

      <p>Email me directly at <a href="mailto:preciouskukumutema@gmail.com">preciouskukumutema@gmail.com</a></p>
    </section>
  );
}
