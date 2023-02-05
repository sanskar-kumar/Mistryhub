import "./style.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Form() {
  
  const [workerInfo, setWorkerInfo] = useState({
    name: "",
    category: "",
    email:"",
    password:"",
    experience: "",
    location: "",
    contactNumber: "",
    about: "",
  });
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    // handleChange(event);
    event.preventDefault();
    if (workerInfo.name==="") {
      alert("Please enter your name");
    }
    else if (workerInfo.category==="") {
      alert("Please enter your category");
    }
    else if (workerInfo.experience==="") {
      alert("Please enter your experience");
    }
    else if (workerInfo.location==="") {
      alert("Please enter your location");
    }

    else if (workerInfo.contactNumber==="" || workerInfo.contactNumber.length!==10) {
      alert("Enter a valid contact number");

    }
    else if (workerInfo.about==="") {
      alert("Please enter your about");

    }
    else if (workerInfo.email==="") {
      alert("Please enter your email");

    }
    else if (workerInfo.password==="") {
      alert("Please enter your password");

    }
    else {
    axios.post('http://localhost:3000/worker', {
      name: workerInfo.name,
      category: workerInfo.category,
      experience: workerInfo.experience,
      location: workerInfo.location,
      contactNumber:workerInfo.contactNumber,
      about: workerInfo.about,
      email: workerInfo.email,
      password: workerInfo.password
    })
    .then(function (response) {
      alert("Worker added successfully");
      console.log("The response is ", response);
    })
    .catch(function (error) {
      console.log("The error is ", error);
    });
    console.log(workerInfo);
    setWorkerInfo({
      name: "",
      experience: "",
      contactNumber: "",
      about: "",
      category: "",
      location: "",
      email:"",
      password:""
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
            <label className="input-label">Category</label>
            <select
              className="input-box"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, category: event.target.value })
              }
            >
              <option name="category" value="Electrician">
                Electrician
              </option>
              <option name="category" value="Plumber">
                Plumber
              </option>
              <option name="category" value="Carpenter">
                Carpenter
              </option>
              <option name="category" value="Manson">
                Manson
              </option>
              <option name="category" value="Painter">
                Painter
              </option>
              <option name="category" value="Repairman">
                Repairman
              </option>
            </select>
          </div>
          <div className="input">
            <label className="input-label">Experience</label>
            <input
              className="input-box"
              type="number"
              name="experience"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, experience: event.target.value })
              }
              value={workerInfo.experience}
            />
          </div>
          <div className="input">
            <label className="input-label">Location</label>
            <input
              className="input-box"
              type="text"
              name="location"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, location: event.target.value })
              }
              value={workerInfo.location}
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
            <label className="input-label">password</label>
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
              type="number"
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
            <label className="input-label">About You </label>
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
