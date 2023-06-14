import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: mistrhub1@gmail.com</p>
          <p>Phone: +91 9667650530</p>
          <p>Address: National Institute of Technology Delhi</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-address">
          <h3>Visit Us</h3>

          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111864.30645634311!2d77.06319383925513!3d28.816237720752397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1686775485308!5m2!1sen!2sin"
            
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="made-with-love">Made with ❤️ by Sanskar</p>
    </footer>
  );
};

export default Footer;
