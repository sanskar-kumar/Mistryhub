import React, { useEffect, useState } from "react";
import axios from "axios";
import "./clientDashboard.css";

import Fab from "@mui/material/Fab";
import PendingIcon from "@mui/icons-material/Pending";
import DoneIcon from "@mui/icons-material/Done";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const BookingRequests = ({ typeofRequest }) => {
  const [bookingRequests, setBookingRequests] = useState([
    {
      id: "1",
      date: "01-06-2022",
      service: "Painting",
    },
    {
      id: "1",
      date: "01-06-2022",
      service: "Painting",
    },
    {
      id: "1",
      date: "01-06-2022",
      service: "Painting",
    },
    {
      id: "1",
      date: "01-06-2022",
      service: "Painting",
    },
  ]);

  useEffect(() => {
    fetchBookingRequests();
  }, []);

  const fetchBookingRequests = async () => {
    try {
      // Make an API request to fetch booking requests
      const response = await axios.get("/api/booking-requests");

      // Set the fetched booking requests to the state
      setBookingRequests(response.data);
    } catch (error) {
      console.error("Error fetching booking requests:", error);
    }
  };
  const statusOfService = "pending";
  const [ratingValue, setValue] = useState(0);
  const [hover, setHover] = React.useState(-1);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{typeofRequest}</h2>

      {bookingRequests.length > 0 ? (
        <div>
          {bookingRequests.map((request) => (
            <div className="booking-card">
              <p className="booking-card-content">
                Worker Category: Electrician
              </p>
              <p className="booking-card-content">Name: Arthur</p>
              <p className="booking-card-content">
                Booking Date: {request.date}
              </p>
              <p className="booking-card-content">
                Visiting Date: {request.date}
              </p>
              <p className="booking-card-content">
                Visiting Time: {request.date}
              </p>
              <p className="booking-card-content">
                Contact Number: {request.date}
              </p>
              <p className="booking-card-content">
                Service Description: I need AC repairing
              </p>
              {typeofRequest === "Ongoing Services" ? (
                <div style={{ textAlign: "center" }}>
                  {statusOfService === "accepted" ? (
                    <Fab variant="extended" color="success" aria-label="add">
                      <DoneIcon sx={{ mr: 1 }} /> Accepted
                    </Fab>
                  ) : statusOfService === "pending" ? (
                    <Fab variant="extended" color="warning" aria-label="add">
                      <PendingIcon sx={{ mr: 1 }} /> Pending
                    </Fab>
                  ) : statusOfService === "rejected" ? (
                    <Fab variant="extended" color="error" aria-label="add">
                      <ThumbDownAltRoundedIcon sx={{ mr: 1 }} />
                      Rejected
                    </Fab>
                  ) : null}
                </div>
              ) : typeofRequest === "Completed Services" ? (
                <div style={{ textAlign: "center" }}>
                  {/* only show this when that particular service is not rated */}
                  <StyledRating
                    name="highlight-selected-only"
                    value={ratingValue}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                      console.log(newValue);
                    }}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    size="large"
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  <div>{hover !== -1 ? customIcons[hover].label : null}</div>
                </div>
              ) : typeofRequest ===
                "New Requests" ? // Your New Requests component here
                <div style={{ textAlign: "center" }}>
                    <Fab  variant="extended" color="success" aria-label="add" sx={{ mr: 1 }}>
                      <CheckIcon sx={{ mr: 1 }} /> Accept
                    </Fab>
                    <Fab variant="extended" color="error" aria-label="add" sx={{ ml: 1 }}>
                      <ClearIcon sx={{ mr: 1 }} />
                      Reject
                    </Fab>
                </div> : null}
            </div>
          ))}
        </div>
      ) : (
        <p>No booking requests found.</p>
      )}
    </div>
  );
};

export default BookingRequests;
