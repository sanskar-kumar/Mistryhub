import React from 'react';
import "./clientDashboard.css"
const UserProfile = (props) => {
  const {detail}=props;
  const { name, email,contactNumber,address } = detail;
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://w0.peakpx.com/wallpaper/214/949/HD-wallpaper-thomas-shelby-fondo-de-pantalla.jpg" alt="User Profile" className="profile-pic" />
        <h2 className="profile-name">{name}</h2>
      </div>
      <div className="profile-details">
        <div className="profile-info">
          <label>Email:</label>
          <p>{email}</p>
        </div>
        <div className="profile-info">
          <label>Contact:</label>
          <p>{contactNumber}</p>
        </div>
        <div className="profile-info">
          <label>Address:</label>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;