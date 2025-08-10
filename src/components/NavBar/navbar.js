import React from 'react';
import './navbar.css'; 
import logo from '../../assets/logo.png'; 
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            
            <div className="desktopMenu">
                <Link className="desktopMenuItem" to="intro" smooth={true} duration={500}>Home</Link>
                <Link className="desktopMenuItem" to="about" smooth={true} duration={500}>About</Link>
                <Link className="desktopMenuItem" to="education" smooth={true} duration={500}>Education</Link>
                <Link className="desktopMenuItem" to="skills" smooth={true} duration={500}>Skills</Link>
                <Link className="desktopMenuItem" to="projects" smooth={true} duration={500}>Projects</Link>
                <Link className="desktopMenuItem" to="certifications" smooth={true} duration={500}>Certifications</Link>
                <Link className="desktopMenuItem" to="internship" smooth={true} duration={500}>Internship</Link>
                <Link className="desktopMenuItem" to="achievements" smooth={true} duration={500}>Achievements</Link>
                <Link className="desktopMenuItem" to="contact" smooth={true} duration={500}>Contact</Link>

            </div>
            <Link to="contact" smooth={true} duration={500}><button className="desktopMenuBtn">
            <img src={contactImg} alt="Contact Icon" className="desktopMenuImg" />
            Contact Me
  </button>
</Link>


        </nav>
    );
};

export default Navbar;
