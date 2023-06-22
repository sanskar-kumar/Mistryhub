import React, {useState } from "react";
import "./clientDashboard.css";

import Fab from "@mui/material/Fab";
import PendingIcon from "@mui/icons-material/Pending";
import DoneIcon from "@mui/icons-material/Done";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

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

const BookingRequests = ({
  typeofRequest,
  bookingDetails,
  isWorker,
  handleBookingStatusChange,
  updateRating,
}) => {
  // console.log(isWorker);
  const [ratingValues, setRatingValues] = useState({});
  const [hover, setHover] = React.useState(-1);

  // console.log(bookingDetails);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{typeofRequest}</h2>

      {bookingDetails && bookingDetails.length > 0 ? (
        <div>
          {[...bookingDetails].reverse().map((request) => (
            <div className="booking-card" key={request._id}>
              <p className="booking-card-content">Booking Id: {request._id};</p>
              <p className="booking-card-content">
                Worker Category: {request.serviceCategory};
              </p>
              <p className="booking-card-content">
                Client Name: {request.clientName}
              </p>
              <p className="booking-card-content">
                Worker Name: {request.workerName}
              </p>
              <p className="booking-card-content">
                Booking Date:{" "}
                {new Date(request.bookingDate).toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="booking-card-content">
                Visiting Address: {request.address};
              </p>
              <p className="booking-card-content">
                Visiting Date:{" "}
                {new Date(request.visitDate).toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>

              <p className="booking-card-content">
                Visiting Time: {request.visitTime}
              </p>
              <p className="booking-card-content">
                Contact Number: {request.workerContact}
              </p>
              <p className="booking-card-content">
                Service Description: {request.description}
              </p>
              <p className="booking-card-content">
                Additional Comment: {request.comment}
              </p>
              {typeofRequest === "Ongoing Services" ? (
                <div style={{ textAlign: "center" }}>
                  {request.status === "accepted" ? (
                    <>
                      <Fab
                        variant="extended"
                        color="warning"
                        aria-label="add"
                        sx={{ mr: 1 }}
                      >
                        <PendingIcon sx={{ mr: 1 }} /> In Process
                      </Fab>
                      {isWorker === true ? (
                        <Fab
                          variant="extended"
                          color="success"
                          aria-label="add"
                          sx={{ ml: 1 }}
                          onClick={() =>
                            handleBookingStatusChange(request._id, "completed")
                          }
                        >
                          <DoneIcon sx={{ mr: 1 }} /> Mark as Complete
                        </Fab>
                      ) : null}
                    </>
                  ) : null}
                </div>
              ) : typeofRequest === "Declined Requests" ? (
                <div style={{textAlign:'center'}}>
                <Fab
                  variant="extended"
                  color="error"
                  aria-label="add"
                  sx={{ ml: 1 }}
                >
                  Declined
                </Fab>
                </div>
                
              ) : typeofRequest === "Completed Services" ? (
                !isWorker && (
                  <div style={{ textAlign: "center" }}>
                    <StyledRating
                      name={`highlight-selected-only-${request._id}`}
                      value={ratingValues[request._id] || request.rating}
                      onChange={(event, newValue) => {
                        setRatingValues((prevState) => ({
                          ...prevState,
                          [request._id]: newValue,
                        }));
                        // console.log(newValue);
                        updateRating(request._id, newValue);
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
                )
              ) : typeofRequest === "New Requests" ? ( // Your New Requests component here
                <div style={{ textAlign: "center" }}>
                  <Fab
                    variant="extended"
                    color="success"
                    aria-label="add"
                    sx={{ mr: 1 }}
                    onClick={() =>
                      handleBookingStatusChange(request._id, "accepted")
                    }
                  >
                    <CheckIcon sx={{ mr: 1 }} /> Accept
                  </Fab>
                  <Fab
                    variant="extended"
                    color="error"
                    aria-label="add"
                    sx={{ ml: 1 }}
                    onClick={() =>
                      handleBookingStatusChange(request._id, "declined")
                    }
                  >
                    <ClearIcon sx={{ mr: 1 }} />
                    Reject
                  </Fab>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", fontSize: "3em" }}>
          No {typeofRequest} found.
        </p>
      )}
    </div>
  );
};

export default BookingRequests;
