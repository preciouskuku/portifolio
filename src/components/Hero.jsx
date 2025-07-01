import React from 'react';
import './Hero.css';
import TypingEffect from './TypingEffect';
import profilePic from '../assets/hero.jpg';
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-text">
        <TypingEffect texts={[
   "Hey, I'm PRECIOUS",
  "I'm a frontend developer",
  "I'm a backend developer"
]} />

        <p>I'm a passionate and curious tech enthusiast currently specializing in web development.</p>
        <Link to="/projects" className="btn">Check My Work</Link>
      </div>

      <div className="hero-image">
        <img src={profilePic} alt="profile" />
      </div>
    </section>
  );
}
