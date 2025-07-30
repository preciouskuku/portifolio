import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import HireMe from './components/HireMe';
import Footer from './components/Footer'; 


export default function App() {
  return (
    <Router>
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hire" element={<HireMe />} />
        

        

      
      </Routes>

      <Footer />
    </Router>
  );
}
