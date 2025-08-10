import React from 'react';
import './Projects.css';
import hairImage from '../../assets/Hair_Style.png.jpeg';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <h3>Project Title: Hair Styles – Trendy Haircut Showcase</h3>
            <p>
                This project is a simple HTML-based webpage that presents popular hairstyles 
                with images, descriptions, and shop details. It uses basic HTML and CSS for 
                layout, styling, and hover effects to make the content more engaging for 
                visitors interested in hair fashion trends.
            </p>

            {/* Image */}
            <img 
                src={hairImage} 
                alt="Trendy Haircut Showcase" 
                className="project-image"
            />
        </section>
    );
};

export default Projects;
