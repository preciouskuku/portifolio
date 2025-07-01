import React from 'react';
import './Hero.css';
import TypingEffect from './TypingEffect';
import profilePic from '../assets/profile.jpeg';
import TechFloaters from './TechFloaters'; // 👈 add this
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* <TechFloaters /> 👈 this floats logos in the background */}

      <div className="hero-text">
        <TypingEffect text="Hey, I'm Lynn — Frontend Developer 👩🏽‍💻" />
        <p>Frontend dev who builds clean, fun, and responsive web stuff.</p>
        <Link to="/projects" className="btn">Check My Work</Link>
      </div>

      <div className="hero-image">
        <img src={profilePic} alt="Lynn" />
      </div>
    </section>
  );
}
