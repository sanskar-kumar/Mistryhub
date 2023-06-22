import React from 'react';
import "./clientDashboard.css"
const UserProfile = (props) => {
  const {detail}=props;
  const { name, email,contactNumber,address } = detail;
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://hips.hearstapps.com/hmg-prod/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.552xw:0.368xh;0.378xw,0.0295xh&resize=1200:*" alt="User Profile" className="profile-pic" />
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
