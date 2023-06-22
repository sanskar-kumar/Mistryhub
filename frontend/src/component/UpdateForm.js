import "./style.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import {  useNavigate } from "react-router-dom";

function Form({ workerDetails, updateWorkerDetail }) {
  // console.log(role);
  // console.log(clientDetails);
  // const { name, contactNumber,address } = detail;
  const navigate=useNavigate();
  const [workerInfo, setWorkerInfo] = useState({
    name: workerDetails.name,
    contactNumber: workerDetails.contactNumber,
    about: workerDetails.about,
    experience: workerDetails.experience,
    location: workerDetails.location,
    serviceCost: workerDetails.serviceCost,
  });
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    // handleChange(event);
    event.preventDefault();
    // console.log("Update is in progress");
    if (workerInfo.name === "") {
      alert("Please enter your name");
    } else if (workerInfo.contactNumber === "") {
      alert("Enter a valid contact number");
    } else if (workerInfo.about === "") {
      alert("Please enter your about");
    } else if (workerInfo.experience === "") {
      alert("Please enter your experience");
    } else if (workerInfo.location === "") {
      alert("Please enter your location");
    } else if (workerInfo.serviceCost === "") {
      alert("Please enter your serviceCost");
    } else {
      updateWorkerDetail(workerInfo);
      // localStorage.removeItem("workerToken");
      // localStorage.removeItem("workerId");
      // localStorage.removeItem("isWorkerLoggedIn");
      // navigate('/workerDashboard');
    }
  };
  return (
    <div className="register-form-parent">
      <div className="register-form">
        <h2 style={{ textAlign: "center" }}>Update your detail</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label className="input-label">Full name</label>
            <input
              className="input-box"
              type="text"
              placeholder="Name"
              name="name"
              value={workerInfo.name}
              onChange={(event) =>
                setWorkerInfo({
                  ...workerInfo,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>

          <div className="input">
            <label className="input-label">Contact Number</label>
            <input
              className="input-box"
              type="string"
              name="contactNumber"
              onChange={(event) =>
                setWorkerInfo({
                  ...workerInfo,
                  contactNumber: event.target.value,
                })
              }
              value={workerInfo.contactNumber}
            />
          </div>
          <div className="input">
            <label className="input-label">About</label>
            <input
              className="input-box"
              type="text"
              name="about"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, about: event.target.value })
              }
              value={workerInfo.about}
            />
          </div>
          <div className="input">
            <label className="input-label">Experience</label>
            <input
              className="input-box"
              type="text"
              name="experience"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, experience: event.target.value })
              }
              value={workerInfo.experience}
            />
          </div>
          <div className="input">
            <label className="input-label">Service Cost</label>
            <input
              className="input-box"
              type="text"
              name="serviceCost"
              onChange={(event) =>
                setWorkerInfo({
                  ...workerInfo,
                  serviceCost: event.target.value,
                })
              }
              value={workerInfo.serviceCost}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              border: "none",
              background: "none",
              padding: "0",
              margin: "0",
              cursor: "pointer",
            }}
          >
            <Fab variant="extended" color="error" aria-label="add">
              <EditIcon sx={{ mr: 1 }} />
              Update
            </Fab>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
//Sansu123 and Sansu123
