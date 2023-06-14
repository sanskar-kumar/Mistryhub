import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./UpdateForm";
import "./clientDashboard.css";
import ClientBookings from "./Booking";
import DisplayData from "./ViewProfile";
import Insights from "./Insights";

const Sidebar = ({ handleOptionClick, selectedOption }) => {
  //   console.log(selectedOption);
  const navigate = useNavigate();
  const isWorkerLoggedIn = localStorage.getItem("isWorkerLoggedIn");
  useEffect(() => {
    if (isWorkerLoggedIn === null) {
      navigate("/workerLogin");
    }
  }, [isWorkerLoggedIn, navigate]);
  // By adding isClientLoggedIn and navigate as dependencies in the useEffect dependency array, the effect will be triggered whenever the value of isClientLoggedIn changes.
  const handleLogout = () => {
    localStorage.removeItem("workerToken");
    localStorage.removeItem("workerId");
    localStorage.removeItem("isWorkerLoggedIn");
    navigate("/workerLogin");
  };
  return (
    <div className="sidebar">
      {/* <h4 style={{ textAlign: "center" }}>Welcome Thomas Shelby</h4> */}
      <div style={{ textAlign: "center", margin: "2%", padding: "5%" }}>
        <img
          src="https://w0.peakpx.com/wallpaper/214/949/HD-wallpaper-thomas-shelby-fondo-de-pantalla.jpg"
          alt="User Profile"
          className="profile-pic"
        />
        <h4 className="profile-name"> Welcome Thomas Shelby</h4>
      </div>
      <ul>
        <li
          className={
            selectedOption === "Option 6" ? "li-selected" : "li-normal"
          }
          onClick={() => handleOptionClick("Option 6")}
        >
          Insights
        </li>

        <li
          className={
            selectedOption === "Option 5" ? "li-selected" : "li-normal"
          }
          onClick={() => handleOptionClick("Option 5")}
        >
          New Requests
        </li>
        <li
          className={
            selectedOption === "Option 1" ? "li-selected" : "li-normal"
          }
          onClick={() => handleOptionClick("Option 1")}
        >
          Ongoing Services
        </li>
        <li
          className={
            selectedOption === "Option 2" ? "li-selected" : "li-normal"
          }
          onClick={() => handleOptionClick("Option 2")}
        >
          Completed Services
        </li>
        <li
          className={
            selectedOption === "Option 4" ? "li-selected" : "li-normal"
          }
          onClick={() => handleOptionClick("Option 4")}
        >
          View Profile
        </li>
        <li
          className={
            selectedOption === "Option 3" ? "li-selected" : "li-normal"
          }
          onClick={() => handleOptionClick("Option 3")}
        >
          Edit Profile
        </li>
        <li
          className={
            selectedOption === "Option 5" ? "li-selected" : "li-normal"
          }
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

const Content = ({ selectedOption }) => {
  return (
    <div className="content">
      {/* <h2>Selected Option: {selectedOption}</h2> */}
      {selectedOption === "Option 1" ? (
        <ClientBookings typeofRequest={"Ongoing Services"} />
      ) : selectedOption === "Option 2" ? (
        <ClientBookings typeofRequest={"Completed Services"} />
      ) : selectedOption === "Option 3" ? (
        <Form />
      ) : selectedOption === "Option 4" ? (
        <DisplayData />
      ) : selectedOption === "Option 5" ? (
        <ClientBookings typeofRequest={"New Requests"} />
      ) : selectedOption === "Option 6" ? (
        <Insights />
      ) : null}
    </div>
  );
};

function ClientDashboard() {
  const [selectedOption, setSelectedOption] = useState("Option 6");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <Sidebar
          handleOptionClick={handleOptionClick}
          selectedOption={selectedOption}
        />
        <Content selectedOption={selectedOption} />
      </div>
    </div>
  );
}
export default ClientDashboard;
