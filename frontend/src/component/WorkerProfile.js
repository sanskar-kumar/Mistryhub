import React from 'react';
import "./clientDashboard.css"
import { useState, useEffect } from "react";
import axios from "axios";

const WorkerProfile = () => {
  const workerToken = localStorage.getItem("workerToken");
  const workerId = localStorage.getItem("workerId");
  const [workerDetails, setWorkerDetails] = useState({});

  useEffect(() => {
    const fetchWorkerDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/worker/getWorkerDetail",
          {
            params: { workerId: workerId },
          }
        );
        setWorkerDetails(response.data);
      } catch (error) {
        console.log("Error fetching worker details:", error);
        localStorage.removeItem("workerToken");
        localStorage.removeItem("workerId");
        localStorage.removeItem("isWorkerLoggedIn");
      }
    };
  
    fetchWorkerDetails(); // Call the function when the component mounts
  
    // Add suitable dependencies based on your requirements
  }, [workerToken, workerId]);
  
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://cdn.xxl.thumbs.canstockphoto.com/worker-with-protective-gear-with-thumbs-up-stock-photograph_csp5308829.jpg" alt="User Profile" className="profile-pic" />
        <h2 className="profile-name">{workerDetails.name}</h2>
      </div>
      <div className="profile-details">
        <div className="profile-info">
          <label>Email:</label>
          <p>{workerDetails.email}</p>
        </div>
        <div className="profile-info">
          <label>Contact:</label>
          <p>{workerDetails.contactNumber}</p>
        </div>
        <div className="profile-info">
          <label>Experience:</label>
          <p>{workerDetails.experience}</p>
        </div>
        <div className="profile-info">
          <label>Category:</label>
          <p>{workerDetails.category}</p>
        </div>
        <div className="profile-info">
          <label>Service Cost:</label>
          <p>{workerDetails.serviceCost}</p>
        </div>
        <div className="profile-info">
          <label>About:</label>
          <p>{workerDetails.about}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
