import React from 'react';
import './Team.css'; 
import TeamLogo from '../assets/EquaTechInnovators.jpg';

const Team = () => {
  return (
    <div className="team-container">
      {/* Left Side - Team Logo */}
      <div className="team-logo">
        <img src={TeamLogo} alt="Team Logo" className="logo-image1" />
      </div>

      {/* Right Side - Team Member Names */}
      <div className="team-members">
        <h2>Our Team Members</h2>
        <div className="member-group">
          {/* First group of 3 members */}
          <div className="group">
            <ul>
              <li>Utsav Mehta</li>
              <li>Srushti Dhotre</li>
              <li>Kajal Jadhao</li>
            </ul>
          </div>
          {/* Second group of 3 members */}
          <div className="group">
            <ul>
              <li>Shreya Nalawade</li>
              <li>Narayan Nawale</li>
              <li>Nilesh Nikam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
