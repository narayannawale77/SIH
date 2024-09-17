
import React from 'react';
import './Slide3.css';
import slide3 from '../assets/Slide4.PNG'; // Corrected path to assets

const Slide3 = () => {
  return (
    <div className="slide-container">
      <div className="image-container">
        <img src={slide3} alt="Slide 3" />
      </div>
      <div className="content">
        <h1>Streamlined Bail Processing</h1>
        <h2>Problem Addressed:</h2>
        <p>Indian courts handle thousands of bail applications daily.</p>
        <h2>Proposed Solution:</h2>
        <p>The "Bail Rocker" system is designed to automate and expedite the bail application process.</p>
        
        <h2>System Integration:</h2>
        <ul>
          <li><strong>CourtListener:</strong> Offers free legal opinions and research materials.</li>
          <li><strong>LIMBS (Legal Information Management & Briefing System):</strong> Provides real-time access to the Indian judiciary's case data.</li>
          <li><strong>ICJS (Interoperable Criminal Justice System):</strong> Facilitates seamless data transfer between police, courts, jails, and forensic institutions.</li>
          <li><strong>E-Court:</strong> Digital court management for easier access to legal documents and case status.</li>
        </ul>

        <h1>Scalable and Adaptive</h1>
        <p>The Indian judiciary handles a large caseload. A cloud-based infrastructure allows the system to scale efficiently, growing as needed.</p>
        <p><strong>Future Reforms:</strong> The system is designed to accommodate future legal reforms, making it adaptive.</p>

        <h1>Legal Framework Compliance</h1>
        <p>The system is designed to comply with Indian judicial regulations, ensuring secure handling of sensitive data using encryption and tokenization.</p>
        <p><strong>Cloud Infrastructure:</strong> Uses secure platforms like Google Cloud and implements security protocols like HTTPS and SSH, which are in line with India's legal data security standards.</p>

        <h1>Cost Efficiency & Access to Justice</h1>
        <p>The system enhances access to justice for underprivileged sections of society by streamlining the bail process.</p>
        <p><strong>Remote Case Handling:</strong> It aids rural areas with limited access to physical courts, facilitating more transparent bail processes.</p>
        <p><strong>Automation Benefits:</strong> Automating routine tasks like tracking bail applications can reduce errors, improve the efficiency of judicial processes, and minimize manpower costs.</p>
      </div>
    </div>
  );
}

export default Slide3;

