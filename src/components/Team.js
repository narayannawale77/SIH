import React from 'react';
import './Team.css'; // Importing the CSS file for styling

const Team = () => {
  return (
    <div className="team-container">
      {/* Left Side - Team Logo */}
      <div className="team-logo">
        <img src="your_team_logo_url_here" alt="Team Logo" className="logo-image" />
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
