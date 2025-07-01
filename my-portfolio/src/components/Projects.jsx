import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React and Vite.',
    link: 'https://github.com/lyncia22/my-portfolio',
    
  },
  {
    title: 'Buildlink Zimbabwe',
    description: 'Platform connecting users with verified construction professionals.',
    link: 'https://github.com/lyncia22/build',
    
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
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
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
