import "./style.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

function Form(role) {
  const [workerInfo, setWorkerInfo] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
    address: "",
  });
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    // handleChange(event);
    event.preventDefault();
    console.log("Update is in progress");
    if (workerInfo.name === "") {
      alert("Please enter your name");
    } else if (
      workerInfo.contactNumber === "" ||
      workerInfo.contactNumber.length !== 10
    ) {
      alert("Enter a valid contact number");
    } else if (workerInfo.address === "") {
      alert("Please enter your about");
    } else if (workerInfo.email === "") {
      alert("Please enter your email");
    } else if (workerInfo.password === "") {
      alert("Please enter your password");
    } else {
      axios
        .post("http://localhost:3000/clientRegister", {
          name: workerInfo.name,
          contactNumber: workerInfo.contactNumber,
          address: workerInfo.address,
          email: workerInfo.email,
          password: workerInfo.password,
        })
        .then(function (response) {
          alert("Client added successfully");
          console.log("The response is ", response);
        })
        .catch(function (error) {
          console.log("The error is ", error);
        });
      console.log(workerInfo);
      setWorkerInfo({
        name: "",
        contactNumber: "",
        email: "",
        password: "",
        address: "",
      });
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
            <label className="input-label">Address</label>
            <input
              className="input-box"
              type="text"
              name="about"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, address: event.target.value })
              }
              value={workerInfo.address}
            />
          </div>
          <button type="submit" style={{ width:"100%",border:"none", background: "none", padding: "0", margin: "0", cursor: "pointer"}} >
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
