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
import Select from "@mui/material/Select";

function Card(props) {
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // const [value, setValue] = useState<number | null>(2);
  return (
    <div>
      <Dialog fullScreen maxWidth="sm" open={open} onClose={handleClose}>
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
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>Visit Date</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tentative visit Date and Time"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>Visit Time</DialogContentText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="Time"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>9 AM to 12 PM</MenuItem>
            <MenuItem value={20}>2 PM to 5 PM</MenuItem>
            <MenuItem value={30}>6 PM tp 9 PM</MenuItem>
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained">
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Card;
