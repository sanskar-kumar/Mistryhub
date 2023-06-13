import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./UpdateForm";
import "./clientDashboard.css";
import ClientBookings from "./Booking";
import DisplayData from "./ViewProfile"


const Sidebar = ({ handleOptionClick, selectedOption }) => {
//   console.log(selectedOption);
  return (
    <div className="sidebar">
      {/* <h4 style={{ textAlign: "center" }}>Welcome Thomas Shelby</h4> */}
      <ul>
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
          Completed Service
        </li>
        
        <li
          className={
            selectedOption === "Option 3" ? "li-selected" : "li-normal"
          }
          onClick={() => handleOptionClick("Option 3")}
        >
          Edit Profile
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
      ) :null}
    </div>
  );
};

function ClientDashboard() {
  const [selectedOption, setSelectedOption] = useState("Option 4");

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
