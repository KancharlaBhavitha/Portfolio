import React from 'react';
import './Internship.css';
import inten1 from '../../assets/Internship.png.jpeg';
 // Make sure the spelling matches!

const Internship = () => {
  return (
    <section id="internship">
      <h2 className="internship-title">Internship</h2>
      <div className="internship-content">
        <img src={inten1} alt="Internship Certificate" className="Internship-img" />
        <p className="internship-description">
          Completed a 6-week Full Stack Development training at <strong>Datavalley</strong>, covering <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> with hands-on project experience.
        </p>
      </div>
    </section>
  );
};

export default Internship;
