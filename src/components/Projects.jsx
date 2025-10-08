import React, { useRef, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import "./Projects.css";

const projects = [
  {
    title: "WebScrapper",
    description: "My project using Python to scrape job data.",
    code: "https://github.com/preciouskuku/web-scrapper.git",
    demo: "",
    image: "/imgs/web scrapper.jpg",
    tags: ["Python", "BeautifulSoup", "Pandas"],
  },
  {
    title: "Buildlink Zimbabwe",
    description: "A construction website for services and suppliers.",
    code: "https://github.com/preciouskuku/buildlink-website.git",
    demo: "",
    image: "/imgs/buildlnk.jpg",
    tags: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Crop Detection App",
    description:
      "A smart farming app that detects crop diseases using AI and provides treatment suggestions.",
    code: "https://github.com/preciouskuku/plant-iq",
    demo: "https://plant-iq-rho.vercel.app/",
    image: "/imgs/PlantIQ - Google Chrome 9_3_2025 1_21_25 PM.png",
    tags: ["React", "AI", "Tailwind"],
  },
  {
    title: "Smart Apply App",
    description:
      "An intelligent platform that helps students apply for universities using AI.",
    code: "https://github.com/preciouskuku/CollageApp",
    demo: "",
    image: "/imgs/collage.png",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Zimsisters Mobile App",
    description:
      "A mobile application for supporting girls during their menstrual journey.",
    code: "https://github.com/preciouskuku/Zimsisters",
    demo: "",
    image: "/imgs/Rectangle 4371.png",
    tags: ["React Native", "Expo"],
  },
  {
    title: "Parking Space Finder",
    description:
      "A web application that helps drivers find available parking spaces.",
    code: "https://github.com/preciouskuku/parking-finder",
    demo: "https://ty-6959.vercel.app/",
    image: "/imgs/parking.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Agrimo",
    description:
      "A agriculture website for a company called Agrimo.",
    code: "https://github.com/preciouskuku/agric",
    demo: "https://agric-flax.vercel.app/",
    image: "/imgs/agric.png",
    tags: ["React", "Node.js", "tailwind"   ],
  },
  {
    title: "Buildit",
    description:
      "A construction website for services and suppliers.",
    code: "https://github.com/preciouskuku/buildit",
    demo: "https://agric-flax.vercel.app/",
    image: "/imgs/blue.png",
    tags: ["React", "Node.js", "tailwind"   ],
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
      className={`projects ${isVisible ? "fade-in" : "hidden"}`}
      ref={sectionRef}
    >
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            {/* Image + overlay */}
            <div className="project-image-container">
              <img
                src={proj.image}
                alt={proj.title}
                className="project-image"
              />
              <div className="overlay">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-btn"
                  >
                    Preview
                  </a>
                )}
                {proj.code && (
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-btn"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>

            {/* Text content */}
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tags">
                {proj.tags?.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Demo Button with GitHub icon */}
            <div className="live-btn-container">
              {proj.code && (
                <a
                  href={proj.code}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                  style={{ marginRight: proj.demo ? "10px" : "0" }}
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                >
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
