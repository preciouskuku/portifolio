import React from 'react';
import './Hero.css';
import TypingEffect from './TypingEffect';
import profilePic from '../assets/hero.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Hero Text */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hey, I'm{" "}
          <span className="name-highlight">PRECIOUS</span>{" "}
          <TypingEffect texts={["frontend developer", "backend developer", "full stack developer"]} />
        </h1>

        <p>
          I'm a passionate and curious tech enthusiast currently specializing in web development.
        </p>

        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/projects" className="btn glow-btn">🚀 Check My Work</Link>
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <img src={profilePic} alt="profile" className="profile-img" />
        <div className="circle-bg"></div>
      </motion.div>
    </section>
  );
}
