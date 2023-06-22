import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./UpdateForm";
import "./clientDashboard.css";
import ClientBookings from "./Booking";
import WorkerProfile from "./WorkerProfile";
import Insights from "./Insights";

const Sidebar = ({ handleOptionClick, selectedOption, workerDetails }) => {
  //   console.log(selectedOption);
  const navigate = useNavigate();

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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFkKppvUg9yEoHgVrMANMdj_OdZ-aZxcb4Dp_rpKj0GAr-qZePZL65YqrVUHZyxts7pw"
          alt="User Profile"
          className="profile-pic"
        />
        <h4 className="profile-name"> Welcome {workerDetails.name}</h4>
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
            selectedOption === "Option 7" ? "li-selected" : "li-normal"
          }
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

const Content = ({
  selectedOption,
  workerDetails,
  fetchWorkerBookings,
  workerBookings,
  handleBookingStatusChange,
  updateWorkerDetail,
  fetchWorkerDetails,
}) => {
  // const [workerBookings, setWorkerBookings] = useState([]);

  useEffect(() => {
    // console.log(selectedOption);
    if (selectedOption === "Option 1") {
      fetchWorkerBookings("accepted");
    } else if (selectedOption === "Option 2") {
      fetchWorkerBookings("completed");
    } else if (selectedOption === "Option 5") {
      fetchWorkerBookings("pending");
    } else if (selectedOption === "Option 6") {
      fetchWorkerDetails();
    }
  }, [selectedOption]);
  return (
    <div className="content">
      {/* <h2>Selected Option: {selectedOption}</h2> */}
      {selectedOption === "Option 1" ? (
        <ClientBookings
          typeofRequest={"Ongoing Services"}
          bookingDetails={workerBookings}
          isWorker={true}
          handleBookingStatusChange={handleBookingStatusChange}
        />
      ) : selectedOption === "Option 2" ? (
        <ClientBookings
          typeofRequest={"Completed Services"}
          bookingDetails={workerBookings}
          isWorker={true}
        />
      ) : selectedOption === "Option 3" ? (
        <Form
          workerDetails={workerDetails}
          updateWorkerDetail={updateWorkerDetail}
        />
      ) : selectedOption === "Option 4" ? (
        <WorkerProfile />
      ) : selectedOption === "Option 5" ? (
        <ClientBookings
          typeofRequest={"New Requests"}
          bookingDetails={workerBookings}
          isWorker={true}
          handleBookingStatusChange={handleBookingStatusChange}
        />
      ) : selectedOption === "Option 6" ? (
        <Insights workerDetails={workerDetails} />
      ) : null}
    </div>
  );
};

function WorkerDashboard() {
  const navigate = useNavigate();
  const isWorkerLoggedIn = localStorage.getItem("isWorkerLoggedIn");
  const workerToken = localStorage.getItem("workerToken");
  const workerId = localStorage.getItem("workerId");
  const [selectedOption, setSelectedOption] = useState("Option 6");
  const [workerDetails, setworkerDetails] = useState({});

  const fetchWorkerDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/worker/getWorkerDetail",

        {
          params: { workerId: workerId },
        }
      );
      setworkerDetails(response.data);
    } catch (error) {
      console.log("Error fetching worker details:", error);
      localStorage.removeItem("workerToken");
      localStorage.removeItem("workerId");
      localStorage.removeItem("isWorkerLoggedIn");
      navigate("/workerLogin");
    }
  };
  const [workerBookings, setWorkerBookings] = useState([]);
  const fetchWorkerBookings = async (status) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/booking/workerBookings",
        {
          params: {
            workerId: workerId,
            status: status,
          },
        }
      );
      // console.log(response.data);
      setWorkerBookings(response.data);
    } catch (error) {
      console.log("Error fetching worker bookings:", error);
    }
  };
  const handleBookingStatusChange = async (bookingId, status) => {
    try {
      // console.log(bookingId, status);
      const response = await axios.post(
        "http://localhost:8080/api/booking/changeBookingStatus",
        null,
        {
          params: {
            bookingId: bookingId,
            status: status,
          },
        }
      );
      window.location.reload();
      // console.log(response.data);
      // this calls the three function again to update the details
      // fetchWorkerBookings("accepted");
      // fetchWorkerBookings("completed");
      // fetchWorkerBookings("pending");
      // ...
    } catch (error) {
      console.log("Error updating booking status at workerDashboard:", error);
    }
  };
  const updateWorkerDetail = async (workerInfo) => {
    await axios
      .post("http://localhost:8080/api/worker/updateWorkerDetail", null, {
        params: {
          workerId: workerDetails._id,
          name: workerInfo.name,
          contactNumber: workerInfo.contactNumber,
          about: workerInfo.about,
          experience: workerInfo.experience,
          location: workerInfo.location,
          serviceCost: Number(workerInfo.serviceCost),
        },
      })
      .then(function (response) {
        fetchWorkerDetails();
        alert("Worker updated successfully");
        // console.log("The response is ", response);
      })
      .catch(function (error) {
        console.log("The error is ", error);
      });
  };
  useEffect(() => {
    if (workerToken === null || isWorkerLoggedIn === null) {
      alert("Session Expired");
      navigate("/workerLogin");
    } else {
      // console.log(workerId);
      fetchWorkerDetails();
    }
  }, [[isWorkerLoggedIn, workerToken, fetchWorkerDetails]]);
  // By adding isClientLoggedIn and other as dependencies in the useEffect dependency array, the effect will be triggered whenever the value of isClientLoggedIn changes.

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
          workerDetails={workerDetails}
        />
        <Content
          selectedOption={selectedOption}
          workerDetails={workerDetails}
          fetchWorkerBookings={fetchWorkerBookings}
          workerBookings={workerBookings}
          handleBookingStatusChange={handleBookingStatusChange}
          updateWorkerDetail={updateWorkerDetail}
          fetchWorkerDetails={fetchWorkerDetails}
        />
      </div>
    </div>
  );
}
export default WorkerDashboard;
