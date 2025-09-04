import React from 'react';
import './HireMe.css';
import { FaCode, FaDesktop, FaServer, FaLightbulb, FaTachometerAlt, FaShieldAlt } from 'react-icons/fa';

export default function HireMe() {
  return (
    <section className="hire-me" id="hire">
      {/* Hero / Intro */}
      <div className="hire-intro">
        <h2>Ready to Build Something Amazing?</h2>
        <p>
          As a full-stack developer, I bring your ideas to life with robust, scalable, 
          and intuitive web solutions. Let’s create an exceptional digital experience together.
        </p>
        <a href="/Precious Mutema CV.pdf" download="Precious Mutema CV.pdf" className="btn">
          Download CV
        </a>
      </div>

      {/* Services Section */}
      <div className="services">
        <h3>My Expert Services</h3>
        <div className="services-grid">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h4>Custom Web Development</h4>
            <p>
              Building bespoke web applications from scratch, tailored to your unique 
              business requirements.
            </p>
          </div>

          <div className="service-card">
            <FaDesktop className="service-icon" />
            <h4>Frontend Expertise</h4>
            <p>
              Crafting intuitive and visually stunning user interfaces with modern 
              React frameworks and responsive design.
            </p>
          </div>

          <div className="service-card">
            <FaServer className="service-icon" />
            <h4>Backend Solutions</h4>
            <p>
              Developing robust and scalable server-side applications, APIs, and 
              database management systems.
            </p>
          </div>

          <div className="service-card">
            <FaLightbulb className="service-icon" />
            <h4>Technical Consulting</h4>
            <p>
              Providing expert advice and guidance on technology stacks, architecture, 
              and project planning.
            </p>
          </div>

          <div className="service-card">
            <FaTachometerAlt className="service-icon" />
            <h4>Performance Optimization</h4>
            <p>
              Enhancing speed, efficiency, and scalability of existing applications 
              for superior user experience.
            </p>
          </div>

          <div className="service-card">
            <FaShieldAlt className="service-icon" />
            <h4>Security Audits</h4>
            <p>
              Identifying vulnerabilities and implementing best practices to secure 
              your web applications and data.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="hire-cta">
        <h3>Ready to Start Your Project?</h3>
        <a href="mailto:Preciouskukumutema@gmail.com" className="btn secondary">
          Let’s Collaborate
        </a>
      </div>
    </section>
  );
}
