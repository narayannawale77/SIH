import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo-left">
        <img src="/path/to/left-logo.png" alt="Left Logo" />
      </div>
      <div>Dr Dy Patil Institute Of Technology Pimpri, Pune</div>
      <div>Bail Reckoner</div>
      <div className="logo-right">
        <img src="/path/to/right-logo.png" alt="Right Logo" />
      </div>
    </header>
  );
};

export default Header;
