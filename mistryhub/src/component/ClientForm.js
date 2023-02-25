import "./style.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Form() {
  
  const [workerInfo, setWorkerInfo] = useState({
    name: "",
    email:"",
    password:"",
    contactNumber: "",
    address: "",
  });
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    // handleChange(event);
    event.preventDefault();
    if (workerInfo.name==="") {
      alert("Please enter your name");
    }
    else if (workerInfo.contactNumber==="" || workerInfo.contactNumber.length!==10) {
      alert("Enter a valid contact number");

    }
    else if (workerInfo.address==="") {
      alert("Please enter your about");

    }
    else if (workerInfo.email==="") {
      alert("Please enter your email");

    }
    else if (workerInfo.password==="") {
      alert("Please enter your password");

    }
    else {
    axios.post('http://localhost:3000/clientRegister', {
      name: workerInfo.name,
      contactNumber:workerInfo.contactNumber,
      address: workerInfo.address,
      email: workerInfo.email,
      password: workerInfo.password
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
      email:"",
      password:"",
      address: "",
    });
  }
  };
  return (
    <div className="register-form-parent" style={{ height: "1100px" }}>
      <div className="register-form" style={{ height: "100%" }}>
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
            <label className="input-label">Email</label>
            <input
              className="input-box"
              type="email"
              name="email"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, email: event.target.value })
              }
              value={workerInfo.email}
              />
          </div>
          <div className="input">
            <label className="input-label">Password</label>
            <input
              className="input-box"
              type="password"
              name="password"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, password: event.target.value })
              }
              value={workerInfo.password}
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
          <button type="submit" className="submit-button">
            <h2 style={{ width: "100%" }}>Submit</h2>
          </button>
        </form>
        <div><Link to="/Login">Already a user</Link>  </div>
      </div>
    </div>
  );
}
export default Form;
//Sansu123 and Sansu123
