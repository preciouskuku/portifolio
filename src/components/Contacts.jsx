import React from "react";
import "./Contacts.css";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-page" id="contact">
      <h2>Let's Connect</h2>
      <p className="intro-text">
        I'm a passionate and curious tech enthusiast currently specializing in web development. 
        I enjoy building user-friendly digital solutions that solve real-world problems. 
        My recent projects include a Crop Disease Detection App designed to support farmers with 
        AI-powered diagnosis. I'm always learning and exploring new technologies to grow as a developer 
        and make a meaningful impact through code.
      </p>

      {/* Contact Form */}
      <div className="form-card">
        <h3>Get In Touch</h3>
        <p>Have a question or want to work together? Fill out the form below.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="your.email@example.com" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your message..." rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>

      {/* Connect Section */}
      <div className="connect-section">
        <h3>Or Connect Via</h3>
        <div className="connect-grid">
          {/* Direct Contact */}
          <div className="contact-box">
            <h4>Direct Contact</h4>
            <p><FaEnvelope /> preciouskukumutema@gmail.com</p>
            <p><FaPhone /> +263 71 389 5910</p>
          </div>

          {/* Social Media */}
          <div className="contact-box">
            <h4>Social Media</h4>
            <a href="https://github.com/preciouskuku" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="www.linkedin.com/in/precious-k-mutema" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://www.instagram.com/yo_kids_its.ice_queen/" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://www.facebook.com/preciouskuku.mutema/" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}
