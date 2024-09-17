import React from 'react';
import './Slide1.css';

function Slide1() {
    return (
        <div className="slide-container">
            <div className="image-container">
                <img 
                    src="https://engg.dypvp.edu.in/images/logoDpu1.png" 
                    alt="Centered Image" 
                />
            </div>
            <div className="content">
                <p>This is the content area below the image.</p>
            </div>
        </div>
    );
}

export default Slide1;
