import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>

            <div className="skills-container">
                <div className="skill-category">
                    <h3>Languages</h3>
                    <ul>
                        <li>Python Programming</li>
                        <li>SQL Database Management</li>
                        <li>HTML</li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h3>Technologies</h3>
                    <ul>
                        <li>Web Development</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h3>Tools</h3>
                    <ul>
                        <li>MS Word</li>
                        <li>MS Excel</li>
                    </ul>
                </div>

                <div className="skill-category">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Time Management</li>
                        <li>Self Confidence</li>
                        <li>Positive Attitude</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
