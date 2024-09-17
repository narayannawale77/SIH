import React from 'react';
import './Header.css'; // Importing the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://engg.dypvp.edu.in/images/logoDpu1.png" alt="College Logo" className="logo-image" />
      </div>
      <h1 className="college-name">Dr. D. Y. Patil Institute of Technology Pimpri, Pune.</h1>
    </header>
  );
};

export default Header;
