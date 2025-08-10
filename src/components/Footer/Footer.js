import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">2025 Kancharla Bhavitha. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms" className="footer-link">Terms of Services</a>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
        <a href="#contact" className="footer-link">Connect with me</a>
      </div>
    </footer>
  );
};

export default Footer;
