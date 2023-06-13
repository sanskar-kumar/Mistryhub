import * as React from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Link, useNavigate } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const clientId=localStorage.getItem('clientId');
const token=localStorage.getItem('token');


function Card(props) {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    if(clientId!=null) setOpen(true);
    else{
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

  
  const handleSubmit = () => {
    console.log(clientId);
    if(clientId===null){
      alert('Please Login First');
      // navigate to client Login page
      navigate("/clientLogin");
    }
    else{
      //call api to post the detail 
      //check if the token is still valid
      //check if the required fields are entered

      console.log(serviceDetail);
    }
    
  };
  const handleTimeChange = (event) => {
    setServiceDetail({
      ...serviceDetail,
      visitTime: event.target.value,
    });
  };
  // console.log(serviceDetail.description);
  // const [value, setValue] = useState<number | null>(2);
  return (
    <div
      style={{
        backgroundColor: "#A7ECEE",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "50%", // Adjust the width as per your requirements
        margin: "0 auto", // Center the card horizontally
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
        className="worker_details"
      >
        <div style={{ flex: "1" }} className="worker_general_details">
          <h4>
            <strong>Name </strong>: {props.props.name}
          </h4>
          <h4>Category: {props.props.category}</h4>
          <h4>Experience: {props.props.experience}</h4>
          <h4>Location: {props.props.location}</h4>
          <h4>Contact Number: {props.props.contactNumber}</h4>
          <h4>Charge Per Service: ₹300 </h4>
        </div>
        <div className="worker_image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HIcfODFMZAUv9voGR1uLyYZsE4E5AmAaDA&usqp=CAU"
            alt="worker_image"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      <p
        style={{ fontSize: "25px", fontStyle: "italic", marginBottom: "20px" }}
      >
        {props.props.about}
      </p>
      <div
        className="rating-book"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="rating">
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            size="large"
            readOnly
          />
        </div>
        <div className="book-service">
          <Button variant="contained" size="large" onClick={handleClickOpen}>
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
                <MenuItem value={1}>10 AM to 1 PM</MenuItem>
                <MenuItem value={2}>2 PM to 5 PM</MenuItem>
                <MenuItem value={3}>6 PM to 9 PM</MenuItem>
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
