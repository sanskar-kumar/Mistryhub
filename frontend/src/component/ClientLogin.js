import "./style.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const isClientLoggedIn = localStorage.getItem("isClientLoggedIn");
    if (isClientLoggedIn) {
      // If client is logged in, navigate to client dashboard
      navigate("/clientDashboard");
    }
  }, [navigate]);
  const [workerInfo, setWorkerInfo] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    // handleChange(event);
    event.preventDefault();
    if (workerInfo.email === "") {
      alert("Please enter your Email");
    } else if (workerInfo.password === "") {
      alert("Please enter your Password");
    } else {
      axios
        .post("http://localhost:3000/api/client/clientLogin", {
          email: workerInfo.email,
          password: workerInfo.password,
        })
        .then(function (response) {
          if (response.data === "No worker found") {
            alert("No worker found with such username and password");
          } else {
            alert("Login Successfull");
            // console.log(response);
            localStorage.setItem("clientToken", response.data.clientToken);
            localStorage.setItem("isClientLoggedIn", true);
            localStorage.setItem("clientId", response.data.clientId);
            navigate("/clientDashboard");
            console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log("The error is ", error);
        });
      console.log(workerInfo);
      setWorkerInfo({
        email: "",
        password: "",
      });
    }
  };
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "2%" }}> Client Login </h1>
      <div className="login-form-parent" style={{ height: "300px" }}>
        <div className="login-form" style={{ height: "100%" }}>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label className="input-label">Email*</label>
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
              <label className="input-label">Password*</label>
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
            <button type="submit" className="submit-button">
              <h2 style={{ width: "100%" }}>Submit</h2>
            </button>
          </form>
          <div>
            <Link to="/clientRegister" style={{ textDecoration: "none" }}>
              {" "}
              <h4>Not a user Register</h4>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
//Sansu123 and Sansu123
