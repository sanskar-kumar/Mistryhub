import React from 'react';
import "./clientDashboard.css"
const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://w0.peakpx.com/wallpaper/214/949/HD-wallpaper-thomas-shelby-fondo-de-pantalla.jpg" alt="User Profile" className="profile-pic" />
        <h2 className="profile-name">Thomas Shelby</h2>
      </div>
      <div className="profile-details">
        <div className="profile-info">
          <label>Email:</label>
          <p>johndoe@example.com</p>
        </div>
        <div className="profile-info">
          <label>Contact:</label>
          <p>+1 123 456 7890</p>
        </div>
        <div className="profile-info">
          <label>Contact:</label>
          <p>+1 123 456 7890</p>
        </div>
        <div className="profile-info">
          <label>Contact:</label>
          <p>+1 123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
