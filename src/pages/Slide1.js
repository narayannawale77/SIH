import React from 'react';
import './Slide1.css';
import slide2 from '../assets/Slide2.PNG';

function Slide1() {
    return (
        <div className="slide-container">
            <div className="image-container">
                <img src={slide2} alt="Slide 1" />
            </div>
            <div className="content">
                <h1>Introduction</h1>
                <p>
                    The traditional bail process is often time-consuming and inefficient. Our innovative solution, 
                    the Bail Reckoner, is designed to address these challenges by providing customized interfaces 
                    for different stakeholders: police, undertrial prisoners, judicial aid providers, and judicial authorities.
                </p>

                <h2>Features of the Bail Reckoner</h2>

                <h3>Customized Interfaces</h3>
                <ul>
                    <li><strong>Police:</strong> Simplifies the processing of bail applications.</li>
                    <li><strong>Undertrial Prisoners:</strong> Provides easy access to bail eligibility and application procedures.</li>
                    <li><strong>Judicial Aid Providers:</strong> Facilitates accurate preparation and submission of bail applications.</li>
                    <li><strong>Judicial Authorities:</strong> Streamlines the evaluation process for quicker decisions.</li>
                </ul>

                <h3>Efficiency Improvements</h3>
                <p>
                    <strong>Administrative Tasks:</strong> Automates and manages documents, reducing workload for judiciary and legal professionals.<br/>
                    <strong>Communication:</strong> Enhances document handling and communication between stakeholders, improving overall efficiency.
                </p>

                <h3>Legal Aid Provider Services</h3>
                <p>
                    <strong>Charged Services:</strong> Providers can access references and customized applications based on case requirements.
                </p>

                <h3>Citizen Access</h3>
                <p>
                    <strong>Community Access:</strong> Citizens can connect with legal aid providers for a fee, gaining access to professional assistance.
                </p>
            </div>
        </div>
    );
}

export default Slide1;
