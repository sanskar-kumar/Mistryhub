import React from "react";
import axios from "axios";
import "./card.css"; // Import the CSS file

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
const clientId = localStorage.getItem("clientId");

function Card(props) {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    if (clientId != null) setOpen(true);
    else {
      alert("Please Login first to book service");
      navigate("/clientLogin");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [serviceDetail, setServiceDetail] = React.useState({
    description: "",
    visitDate: "",
    visitTime: "",
    comment: "",
    workerId: props.props._id,
    clientId: clientId,
  });
  const createBooking = async () => {
    await axios
      .post("http://localhost:8080/api/booking/createBooking", null, {
        params: {
          clientId: clientId,
          workerId: serviceDetail.workerId,
          visitDate: serviceDetail.visitDate,
          visitTime: serviceDetail.visitTime,
          description: serviceDetail.description,
          comment: serviceDetail.comment,
        },
      })
      .then(function (response) {
        alert("Booking done successfully");
        navigate("/clientDashboard");
        // console.log("The response is ", response);
      })
      .catch(function (error) {
        console.log("The error is ", error);
      });
  };
  const handleSubmit = () => {
    // console.log(clientId);
    if (clientId === null) {
      alert("Please Login First");
      // navigate to client Login page
      navigate("/clientLogin");
    } else {
      //call api to post the detail
      //check if the required fields are entered
      createBooking();
      // console.log(serviceDetail);
    }
  };
  const handleTimeChange = (event) => {
    setServiceDetail({
      ...serviceDetail,
      visitTime: event.target.value,
    });
  };

  return (
    <div className="card">
      <div className="worker_details">
        <div className="worker_general_details">
          <h4>
            <strong>Name </strong>: {props.props.name}
          </h4>
          <h4>Category: {props.props.category}</h4>
          <h4>Experience: {props.props.experience}</h4>
          <h4>Location: {props.props.location}</h4>
          <h4>Contact Number: {props.props.contactNumber}</h4>
          <h4>Charge Per Service: {props.props.serviceCost} </h4>
          <h4>{props.props.ratingAverage}</h4>
        </div>
        <div className="worker_image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HIcfODFMZAUv9voGR1uLyYZsE4E5AmAaDA&usqp=CAU"
            alt="worker_image"
            className="worker_image"
          />
        </div>
      </div>

      <p className="worker_description">{props.props.about}</p>
      <div className="rating-book">
        <div className="rating">
          <Rating
            name="half-rating-read"
            defaultValue={props.props.ratingAverage}
            precision={0.5}
            size="large"
            readOnly
          />
        </div>
        <div className="book-service">
          <Button
            variant="contained"
            size="large"
            onClick={handleClickOpen}
            className="book_button"
          >
            Book Service
          </Button>
          <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
            <DialogTitle>
              <h2>Book your service with {props.props.name}</h2>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Describe your work*</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Description"
                fullWidth
                variant="standard"
                value={serviceDetail.description}
                onChange={(event) =>
                  setServiceDetail({
                    ...serviceDetail,
                    description: event.target.value,
                  })
                }
              />
            </DialogContent>

            <DialogContent>
              <DialogContentText>Visit Date</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                fullWidth
                variant="standard"
                type="date"
                value={serviceDetail.visitDate}
                onChange={(event) =>
                  setServiceDetail({
                    ...serviceDetail,
                    visitDate: event.target.value,
                  })
                }
              />
            </DialogContent>
            <DialogContent>
              <DialogContentText>Visit Time</DialogContentText>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={serviceDetail.visitTime}
                label="Age"
                onChange={handleTimeChange}
              >
                <MenuItem value={"10AM - 12PM"}>10 AM to 1 PM</MenuItem>
                <MenuItem value={"2PM - 5PM"}>2 PM to 5 PM</MenuItem>
                <MenuItem value={"6PM - 9PM"}>6 PM to 9 PM</MenuItem>
                value={serviceDetail.visitDate}
              </Select>
            </DialogContent>
            <DialogContent>
              <DialogContentText>Any additional comments</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Additional Comment"
                fullWidth
                variant="standard"
                value={serviceDetail.comment}
                onChange={(event) =>
                  setServiceDetail({
                    ...serviceDetail,
                    comment: event.target.value,
                  })
                }
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained">
                Book
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Card;
