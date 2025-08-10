import React from 'react';
import './intro.css';
import profileImage from '../../assets/img.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    const openResume = () => {
        // This will open the resume from public folder in new tab
        window.open(process.env.PUBLIC_URL + '/Bhavitha_Resume.pdf', '_blank');
    };

    return (
        <section id="intro">
            <div className="intro-left">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Bhavitha</span>, Full Stack Developer
                </span>
                <p className="introPara">
                    I’m a Full Stack Developer passionate about building scalable, user-friendly web applications using modern technologies. I specialize in React.js and MongoDB for end-to-end development, and I enjoy creating beautiful, responsive UIs with Tailwind CSS and other modern tools.
                </p>

                <div className="introButtons">
                    <Link to="contact" smooth={true} duration={500}>
                        <button className="btn">
                            <img src={btnImg} alt="icon" className='btnImg' />
                            Connect With Me
                        </button>
                    </Link>
                    <button className="btn outline-btn" onClick={openResume}>My Resume</button>
                </div>
            </div>

            <div className="intro-right">
                <img src={profileImage} alt="Profile" className="profileImage" />
            </div>
        </section>
    );
};

export default Intro;
