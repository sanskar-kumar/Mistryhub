import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./UpdateForm";
import "./clientDashboard.css";
import ClientBookings from "./Booking";
import ViewProfile from "./ViewProfile";


const Sidebar = ({ handleOptionClick, selectedOption }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("clientToken");
    localStorage.removeItem("clientId");
    localStorage.removeItem("isClientLoggedIn");
    navigate("/clientLogin");
  };

  return (
    <div className="sidebar">
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
            selectedOption === "Option 6" ? "li-selected" : "li-normal"
          }
          onClick={() => handleOptionClick("Option 6")}
        >
          Pending Requests
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

const Content = ({ selectedOption,clientDetails }) => {
  const clientId=localStorage.getItem('clientId');
  const [clientBookings, setClientBookings] = useState([]);
  const fetchClientBookings = async (status) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/booking/clientBookings",
        {
          params: {
            clientId: clientId,
            status: status,
          },
        }
      );
      // console.log(response.data);
      setClientBookings(response.data);
    } catch (error) {
      console.log("Error fetching client bookings:", error);
    }
  };

  useEffect(() => {
    if (selectedOption === "Option 1") {
      fetchClientBookings("accepted");
    } else if (selectedOption === "Option 2") {
      fetchClientBookings("completed");
    } else if (selectedOption === "Option 6") {
      fetchClientBookings("pending");
    }
  }, [selectedOption]);
  // console.log(clientBookings);
  return (
    <div className="content">
      {selectedOption === "Option 1" ? (
        <ClientBookings typeofRequest={"Ongoing Services"} bookingDetails={clientBookings}/>
      ) : selectedOption === "Option 6" ? (
        <ClientBookings typeofRequest={"Pending Requests"} bookingDetails={clientBookings} />
      ) : selectedOption === "Option 2" ? (
        <ClientBookings typeofRequest={"Completed Services"} bookingDetails={clientBookings} />
      ) : selectedOption === "Option 3" ? (
        <Form />
      ) : selectedOption === "Option 4" ? (
        <ViewProfile
        detail={clientDetails}
         />
      ) : null}
    </div>
  );
};

function ClientDashboard() {
  const navigate = useNavigate();
  const isClientLoggedIn = localStorage.getItem("isClientLoggedIn");
  const clientToken = localStorage.getItem("clientToken");
  const clientId = localStorage.getItem("clientId");
  const [selectedOption, setSelectedOption] = useState("Option 4");
  const [clientDetails, setClientDetails] = useState({});

  
  const fetchClientDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/client/getClientDetail",

        { headers: { Authorization: `Bearer ${clientToken}` } },
        { clientId: clientId }
      );
      setClientDetails(response.data.authorizedData.client);
    } catch (error) {
      console.log("Error fetching client details:", error);
      navigate('/clientLogin')
    }
  };

  
  
  
  useEffect(() => {
    if (clientToken === null || isClientLoggedIn === null) {
      alert('Session Expired');
      navigate("/clientLogin");
    } else {
      fetchClientDetails();
    }
  }, [[isClientLoggedIn, clientToken,fetchClientDetails]]);

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
        <Content selectedOption={selectedOption} clientDetails={clientDetails}/>
      </div>
    </div>
  );
}


export default ClientDashboard;
