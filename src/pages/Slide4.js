import React from 'react';
import './Slide3.css';
import slide4 from '../assets/Slide5.PNG'; // Corrected path to assets

const Slide3 = () => {
  return (
    <div className="slide-container">
      <div className="image-container">
        <img src={slide4} alt="Slide 3" />
      </div>
      <div className="content">
        <div className="impact">
          <h1>Impact</h1>
          <h2>Streamlining the process and minimizing waiting times:</h2>
          <p>The system helps speed up the bail application process, reducing the time spent waiting for approvals.</p>
          <h2>Recommendation as per nature of offense & related previous case:</h2>
          <p>The system can provide recommendations based on the type of offense and prior similar cases, aiding judicial decisions.</p>
          <h2>Simplifying application preparation and submission:</h2>
          <p>It streamlines the preparation and submission of bail applications, making the process more efficient and user-friendly.</p>
          <h2>Streamlines workflow with real-time data access:</h2>
          <p>The system offers real-time access to legal data, ensuring smoother workflow across the judicial process.</p>
          <h2>Make faster in decision-making:</h2>
          <p>Faster decision-making is possible through improved data access and automation, reducing human error and delays.</p>
        </div>
        <div className="benefits">
          <h1>Benefits</h1>
          <h2>Saves time for legal aid providers, judicial authorities, and undertrial prisoners:</h2>
          <p>By automating the process, the system saves time for key stakeholders, including legal aid providers, judges, and prisoners awaiting bail.</p>
          <h2>Cuts down on paper waste by digitizing the bail process:</h2>
          <p>The system digitizes the bail application process, reducing the need for physical paperwork, thus being more eco-friendly.</p>
          <h2>Fairness and transparency in the bail process due to access to legal information:</h2>
          <p>The system provides easy access to critical legal information, promoting fairness and transparency in the bail process.</p>
          <h2>Implements encryption and secure cloud storage, protecting sensitive legal data:</h2>
          <p>Sensitive legal data is protected through encryption and secure cloud storage, ensuring compliance with security standards and protecting personal information.</p>
        </div>
      </div>
    </div>
  );
}

export default Slide3;
