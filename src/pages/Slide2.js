import React from 'react';
import './Slide2.css';
import slide2 from '../assets/Slide3.PNG'; // Corrected path to assets

const Slide2 = () => {
  return (
    <div className="slide-container">
      <div className="image-container">
        <img src={slide2} alt="Slide 2" />
      </div>
      <div className="content">
        <h1>Frontend Interface Design & User Interaction</h1>
        <h2>Technologies Used:</h2>
        <ul>
          <li><strong>ReactJS & NextJS:</strong> Used for dynamic routing, ensuring fast, intuitive, and responsive applications. ReactJS provides a smooth UI, while NextJS supports server-side rendering for better performance and SEO.</li>
          <li><strong>Figma:</strong> Used for creating user-centric dashboards, facilitating collaboration among designers and developers to ensure an intuitive interface.</li>
        </ul>
        <p><strong>Example:</strong> A dynamic interface allows easy navigation through bail application steps with seamless transitions between pages.</p>

        <h1>Backend Process & Data Management</h1>
        <h2>Technologies Used:</h2>
        <ul>
          <li><strong>Django, FastAPI, Flask:</strong> Handle backend logic like processing bail requests, fetching data from external databases, and managing authentication and sessions.</li>
          <li><strong>Workflow Optimization:</strong> Designed to process requests efficiently, reducing bail application review and processing time.</li>
        </ul>
        <p><strong>Example:</strong> When a bail application is submitted, the backend handles the request, communicates with external databases, and ensures an efficient workflow.</p>

        <h1>Data Flow & API Integration</h1>
        <h2>External System Communication:</h2>
        <ul>
          <li><strong>Data Repository:</strong> MongoDB/MySQL is used to store, retrieve, and update bail data, including case details and court proceedings.</li>
        </ul>
        <p><strong>Example:</strong> Updates in the E-Court system are retrieved in real-time and reflected in the user interface.</p>

        <h1>Security Protocols</h1>
        <ul>
          <li><strong>End-to-End Encryption & Tokenization:</strong> Ensures data is encrypted during transmission and storage to prevent unauthorized access.</li>
          <li><strong>HTTPS (TLS/SSL) & Secure Shell:</strong> Protects data integrity and security during exchanges between users and servers.</li>
        </ul>
        <p><strong>Example:</strong> Legal professionals access case information securely to ensure privacy and confidentiality.</p>

        <h1>Cloud and Machine Learning Integration</h1>
        <ul>
          <li><strong>Google Cloud Storage:</strong> Provides scalability, reliability, and uptime for handling large amounts of data.</li>
          <li><strong>Machine Learning (PyTorch & TensorFlow):</strong> Used for predictive analytics to assess bail conditions and predict outcomes based on historical data.</li>
        </ul>
        <p><strong>Example:</strong> Analyzing historical bail decisions to suggest conditions or outcomes to judges.</p>
      </div>
    </div>
  );
}

export default Slide2;
