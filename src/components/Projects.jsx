import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'WebScapper',
    description: 'My project using Python to scrape job data.',
    link: 'https://github.com/preciouskuku/web-scrapper.git',
    image: './src/assets/web scrapper.jpg', // 🖼️ Add your screenshot here
  },
  {
    title: 'Buildlink Zimbabwe',
    description: 'A construction website for services and suppliers.',
    link: 'https://github.com/preciouskuku/buildlink-website.git',
    image:'./src/assets/buildlnk.jpg',
  },
  {
    title: 'Crop Detection App',
    description: 'A smart farming app that detects crop diseases using AI and provides treatment suggestions.',
    link: 'https://plant-iq-rho.vercel.app/',
    image: './src/assets/PlantIQ - Google Chrome 9_3_2025 1_21_25 PM.png',
  },
  {
    title: 'Smart Apply App',
    description: 'An intelligent platform that helps students apply for universities using AI.',
    link: 'https://github.com/preciouskuku/CollageApp',
    image: './src/assets/Bolt.new - Google Chrome 8_10_2025 6_47_23 PM.png',
  },
    {
    title: 'Zimsister mobile App',
    description: 'A mobile application for supporting girl during their menstrual journey.',
    link: 'https://github.com/preciouskuku/Zimsisters',
    image: './src/assets/Rectangle 4371.png',
  },
    {
    title: 'Parking space finder',
    description: 'A web application that help driver find available parking spaces.',
    link: 'https://ty-6959.vercel.app/',
    image: './src/assets/parking.jpg',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className={`projects ${isVisible ? 'fade-in' : 'hidden'}`}
      ref={sectionRef}
    >
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            {/* 🖼️ Image section */}
            <img src={proj.image} alt={proj.title} className="project-image" />

            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>

            <div className="btn-group">
              <a href={proj.link} target="_blank" rel="noreferrer" className="btn">
                View Code
              </a>
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noreferrer" className="btn demo-btn">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
