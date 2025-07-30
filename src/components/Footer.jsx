import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram ,FaFacebook,} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        

        <div className="footer-socials">
          <a href="https://github.com/preciouskuku" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="hhttps://www.facebook.com/preciouskuku.mutema/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="www.linkedin.com/in/precious-k-mutema" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/yo_kids_its.ice_queen/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}
