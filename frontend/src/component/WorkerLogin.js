import "./style.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function WorkerLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    const isWorkerLoggedIn = localStorage.getItem("isWorkerLoggedIn");
    if (isWorkerLoggedIn) {
      // If client is logged in, navigate to client dashboard
      navigate("/workerDashboard");
    }
  }, [navigate]);
  const [workerInfo, setWorkerInfo] = useState({
    email:"",
    password:""
  });
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    // handleChange(event);
    event.preventDefault();
    if (workerInfo.email==="") {
      alert("Please enter your Email");

    }
    else if (workerInfo.password==="") {
      alert("Please enter your Password");

    }
    else {
      // console.log(workerInfo.password);
    axios.post('http://localhost:8080/api/worker/workerLogin', {
      email: workerInfo.email,
      password: workerInfo.password
    })
    .then(function (response) {
      if(response.data==="No worker found"){
        alert("No worker found with such username and password")
      }
      else{
        alert("Login Successfull");
        // console.log(response);
        //storing the caching token in local storage
        localStorage.setItem('workerToken', response.data.workerToken);
        localStorage.setItem('workerId', response.data.workerId);
        localStorage.setItem('isWorkerLoggedIn', true);
        navigate('/workerDashboard');
        // console.log("Login is successfull and data is: " + response.data);
        
      }
      
    })
    .catch(function (error) {
      console.log("The error is ", error);
    });
    // console.log(workerInfo);
    setWorkerInfo({
      email:"",
      password:""
    });
  }
  };
  return (
    <div>
    <Navbar/>
    <h1 style={{ textAlign: "center", margin: "2%" }}> Worker Login </h1>
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
          <div className="submit-button-parent">
          <button type="submit" className="submit-button">
            <h2 style={{ width: "100%" }}>Submit</h2>
          </button>
          </div>
        </form>
        <br/>
        <div className="text-footer"><Link to="/workerRegister" style={{textDecoration:'none'}}><h3>Not a registered worker</h3></Link>  </div>
      </div>
    </div>
    </div>
  );
}
export default WorkerLogin;
//Sansu123 and Sansu123
