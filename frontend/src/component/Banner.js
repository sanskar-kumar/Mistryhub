import React from "react";
import "./Banner.css";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const bannerStyle = {
    background: "linear-gradient(135deg, #e3fdfd, #cbf1f5, #a6e3e9, #71c9ce)",
    fontSize: "20px",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner-content">
        <div className="text-section">
          <h1 className="banner-text">"Now Mistry at your door steps" </h1>
          <p className="banner-description">
            Explore MistryHub. Your One-Stop Destination for Reliable Services
            and Skilled Workers.Discover the Best Solutions. Join us today and
            unlock a world of convenience and excellence.
          </p>
        </div>
        <div className="button-section">
          <Link
            to="/clientLogin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button className="user-button">
              <PersonIcon /> User/Client
            </button>
          </Link>

          <Link
            to="/workerLogin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button className="worker-button">
              <EngineeringIcon /> Worker/Professionals
            </button>
          </Link>
        </div>
       
        
      </div>
      
    </div>
  );
};

export default Banner;
