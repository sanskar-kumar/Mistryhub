// import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BarChart from "./BarChart";
import Navbar from "./Navbar";

// import { useHistory } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const tokenId = localStorage.getItem("token");
  const [isloggedin, setIsloggedin] = useState(false);
  const [workerInfo, setWorkerInfo] = useState([]);
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  // console.log("Token is"+ tokenId);
  axios
    .get("http://localhost:3000/user/data", {
      headers: { Authorization: `Bearer ${tokenId}` },
    })
    .then(function (response) {
      // console.log("The response is ", response);
      setIsloggedin(true);
      setWorkerInfo(response.data.authorizedData.worker);
    })
    .catch(function (error) {
      console.log("The error in dashboard component is ", error);
      //   alert("Please login first");
      navigate("/login");
    });
  // console.log(workerInfo);
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="col1">
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="profile-user-description">
              <h1>{workerInfo.name}</h1>
              <h2>{workerInfo.category}</h2>
              <h2>{workerInfo.experience}</h2>
              <h2>{workerInfo.location}</h2>
              <h2>{workerInfo.contactNumber}</h2>
              <p className="worker-description">{workerInfo.about}</p>
            </div>
            <button className="edit-details" onClick={handleClick}>
              Logout
            </button>

            {/* <button className="edit-details">Edit Details</button> */}
          </div>
        </div>
        <div className="col2">
          <div className="services-count">
            <div className="services-done">
              <h2>Services Done:- {workerInfo.ratingCount}</h2>
            </div>
            <div className="services-pending">
              <h2>Services Pending:- 0</h2>
            </div>
          </div>
          <div className="chart">
            <BarChart props={workerInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
