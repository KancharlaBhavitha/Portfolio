import React from 'react';
import './Certifications.css';

import cert1 from '../../assets/cert-1.png.jpeg';
import cert2 from '../../assets/cert-2.png.jpeg';
import cert3 from '../../assets/cert-3.png.jpeg';

const Certifications = () => {
  return (
    <section id="certifications">
      <h2 className="cert-title">Certifications</h2>
      <div className="cert-grid">
        <img src={cert1} alt="Certificate 1" className="cert-img" />
        <img src={cert2} alt="Certificate 2" className="cert-img" />
        <img src={cert3} alt="Certificate 3" className="cert-img" />
      </div>
    </section>
  );
};

export default Certifications;
