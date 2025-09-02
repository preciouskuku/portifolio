import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'WebScapper',
    description: 'My project using Python to scrape job data.',
    link: 'https://github.com/preciouskuku/web-scrapper.git',
    image: '/images/webscrapper.jpg', // 🖼️ Add your screenshot here
  },
  {
    title: 'Buildlink Zimbabwe',
    description: 'A construction website for services and suppliers.',
    link: 'https://github.com/preciouskuku/buildlink-website.git',
    image: '/images/buildlink.jpg',
  },
  {
    title: 'Crop Detection App',
    description: 'A smart farming app that detects crop diseases using AI and provides treatment suggestions.',
    link: 'https://github.com/preciouskuku/crop-detection-app.git',
    image: '/images/cropdetection.jpg',
  },
  {
    title: 'Smart Apply App',
    description: 'An intelligent platform that helps students apply for universities using AI.',
    link: 'https://github.com/preciouskuku/smart-apply-app.git',
    image: '/images/smartapply.jpg',
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
