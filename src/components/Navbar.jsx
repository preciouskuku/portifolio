import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">PRECIOUS</div>

      {/* Desktop & Mobile Links */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/hire" className={location.pathname === '/hire' ? 'active' : ''} onClick={closeMenu}>
            Hire Me
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
