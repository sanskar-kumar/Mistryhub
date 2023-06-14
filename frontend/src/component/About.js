import "./style.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="about">
      <h1 style={{ textAlign: "center", color: 'black' }}>About US</h1>
      <div style={{ margin: "10px" }}>
        <div
          className="d-flex mx-auto"
          style={{ backgroundColor: "#ffffff", marginBottom: "5%" }}
        >
          <div className="mx-auto" style={{ width: "50%" }}>
            <img
              src="https://img.freepik.com/premium-vector/turner-lathe-concept-factory-worker-using-turning-machine-make-metal-detail-metalworking-industrial-manufacturing-isolated-flat-vector-illustration_277904-7121.jpg"
              alt="worker_image"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div style={{ width: "50%" }}>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1.3em",
                padding: "20px",
              }}
            >
              Welcome to MistryHub, the platform where skilled workers and users seeking services connect effortlessly.
              Whether you're a worker specializing in painting, electrical work, plumbing, or any other service, or a user
              looking to book reliable service providers, MistryHub is here to help. Workers can create profiles,
              showcase their expertise, and manage bookings, while users can browse profiles, read reviews, and book services seamlessly.
              With secure payments and a streamlined process, MistryHub ensures a hassle-free experience.
              Join us today to find skilled professionals or book services conveniently. MistryHub connects workers and users for all their service needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
