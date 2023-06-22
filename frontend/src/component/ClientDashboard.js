import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./clientDashboard.css";
import ClientBookings from "./Booking";
import ViewProfile from "./UserProfile";

const Sidebar = ({ handleOptionClick, selectedOption ,clientDetails}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("clientToken");
    localStorage.removeItem("clientId");
    localStorage.removeItem("isClientLoggedIn");
    navigate("/clientLogin");
  };

  return (
    <div className="sidebar">
      <div style={{ textAlign: "center", margin: "2%", padding: "5%" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFkKppvUg9yEoHgVrMANMdj_OdZ-aZxcb4Dp_rpKj0GAr-qZePZL65YqrVUHZyxts7pw"
          alt="User Profile"
          className="profile-pic"
        />
        <h4 className="profile-name"> Welcome {clientDetails.name}</h4>
      </div>
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
            selectedOption === "Option 7" ? "li-selected" : "li-normal"
          }
          onClick={() => handleOptionClick("Option 7")}
        >
          Declined Requests
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

const Content = ({ selectedOption, clientDetails,updateRating }) => {
  const clientId = localStorage.getItem("clientId");
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
    else if (selectedOption === "Option 7") {
      fetchClientBookings("declined");
    }
  }, [selectedOption]);
  // console.log(clientBookings);
  return (
    <div className="content">
      {selectedOption === "Option 1" ? (
        <ClientBookings
          typeofRequest={"Ongoing Services"}
          bookingDetails={clientBookings}
          updateRating={updateRating}
        />
      ) : selectedOption === "Option 6" ? (
        <ClientBookings
          typeofRequest={"Pending Requests"}
          bookingDetails={clientBookings}
          updateRating={updateRating}
        />
      ) : selectedOption === "Option 2" ? (
        <ClientBookings
          typeofRequest={"Completed Services"}
          bookingDetails={clientBookings}
          updateRating={updateRating}
          isWorker={false}
        />
      ): selectedOption === "Option 7" ? (
        <ClientBookings
          typeofRequest={"Declined Requests"}
          bookingDetails={clientBookings}
          updateRating={updateRating}
        />
      ) : selectedOption === "Option 4" ? (
        <ViewProfile detail={clientDetails} />
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
      navigate("/clientLogin");
    }
  };
  const updateRating=async (bookingId,ratingValue) =>{
    try{
      const response=await axios.post(
        "http://localhost:8080/api/booking/updateRating",
        null, 
        {
          params: {
            bookingId: bookingId,
            ratingValue:ratingValue,
          },
        }
       

      );
      // console.log(response.data);
    } catch(error){
      console.log("Error updating rating:", error);
    }
  }

  useEffect(() => {
    if (clientToken === null || isClientLoggedIn === null) {
      alert("Session Expired");
      navigate("/clientLogin");
    } else {
      fetchClientDetails();
    }
  }, [[isClientLoggedIn, clientToken, fetchClientDetails]]);

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
          clientDetails={clientDetails}
        />
        <Content
          selectedOption={selectedOption}
          clientDetails={clientDetails}
          updateRating={updateRating}
        />
      </div>
    </div>
  );
}

export default ClientDashboard;
