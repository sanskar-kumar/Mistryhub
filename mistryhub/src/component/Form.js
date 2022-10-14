import "./style.css";
import { useState } from "react";
// const mongoose = require("mongoose");
// const db=mongoose
//   .connect(
//     "mongodb+srv:Sansu123:Sansu123@cluster0.xud9gr7.mongodb.net/?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true
//     }
//   )
//   db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });
function Form() {
  const [workerInfo, setWorkerInfo] = useState({
    name: "",
    category: "",
    experience: "",
    location: "",
    contactNumber: "",
    about: "",
  });
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    // handleChange(event);
    event.preventDefault();
    console.log(workerInfo);
    setWorkerInfo({
      name: "",
      experience: "",
      contactNumber: "",
      about: "",
      category: "",
      location: "",
    });
  };
  return (
    <div className="register-form-parent" style={{ height: "1000px" }}>
      <div className="register-form" style={{ height: "100%" }}>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label className="input-label">Full name</label>
            <input
              className="input-box"
              type="text"
              placeholder="Name"
              name="name"
              value={workerInfo.name}
              onChange={(event) =>
                setWorkerInfo({
                  ...workerInfo,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <label className="input-label">Category</label>
            <select
              className="input-box"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, category: event.target.value })
              }
            >
              <option name="category" value="Electrician">
                Electrician
              </option>
              <option name="category" value="Plumber">
                Plumber
              </option>
              <option name="category" value="Carpenter">
                Carpenter
              </option>
              <option name="category" value="Manson">
                Manson
              </option>
              <option name="category" value="Painter">
                Painter
              </option>
              <option name="category" value="Painter">
                Repairman
              </option>
            </select>
          </div>
          <div className="input">
            <label className="input-label">Experience</label>
            <input
              className="input-box"
              type="number"
              name="experience"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, experience: event.target.value })
              }
              value={workerInfo.experience}
            />
          </div>
          <div className="input">
            <label className="input-label">Location</label>
            <input
              className="input-box"
              type="text"
              name="location"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, location: event.target.value })
              }
              value={workerInfo.location}
            />
          </div>
          <div className="input">
            <label className="input-label">Contact Number</label>
            <input
              className="input-box"
              type="number"
              name="contactNumber"
              onChange={(event) =>
                setWorkerInfo({
                  ...workerInfo,
                  contactNumber: event.target.value,
                })
              }
              value={workerInfo.contactNumber}
            />
          </div>
          <div className="input">
            <label className="input-label">About You </label>
            <input
              className="input-box"
              type="text"
              name="about"
              onChange={(event) =>
                setWorkerInfo({ ...workerInfo, about: event.target.value })
              }
              value={workerInfo.about}
            />
          </div>
          <button type="submit" className="submit-button">
            <h2 style={{ width: "100%" }}>Submit</h2>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
//Sansu123 and Sansu123
