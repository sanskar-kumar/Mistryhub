import "./style.css";
import { Link } from "react-router-dom";
function services() {
  return (
    <div class="" id="services">
      <div
        class="d-flex mx-auto services-class"
        style={{ height: "auto", marginTop: "100px", marginBottom: "10px" }}
      >
        <div class="d-flex scroller mx-auto">
          <div
            style={{
              height: "auto",
              width: "auto",
              margin: "10px",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgNQzPGJTFZjOLFzr7mrNOSILhj2yX6FyR36HL26jMQ&s"
              alt="iiiid"
              height="200px"
              width="200px"
              style={{ borderRadius: "100%" }}
            />
            <h4 style={{ textAlign: "center" }}>Electrician</h4>
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
              margin: "10px",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgMJ-rF9ypmyywDV72V8LniY6-ZFyCjoAm1OSbd9v&s"
              alt="iiiid"
              height="200px"
              width="200px"
              style={{ borderRadius: "100%" }}
            />
            <h4 style={{ textAlign: "center" }}>Plumber</h4>
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
              margin: "10px",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakLq6kne7mH6-GeDMDkS5fnm3QJDRJiezzbiG13k&s"
              alt="iiiid"
              height="200px"
              width="200px"
              style={{ borderRadius: "100%" }}
            />
            <h4 style={{ textAlign: "center" }}>Carpenter</h4>
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
              margin: "10px",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mZtoDnJ_WX79D7tjjwg3ZLSJ7HYdu9PWehe1W814&s"
              alt="iiiid"
              height="200px"
              width="200px"
              style={{ borderRadius: "100%" }}
            />
            <h4 style={{ textAlign: "center" }}>Mason</h4>
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
              margin: "10px",
            }}
          >
            <img
              src="https://img.freepik.com/free-vector/painter-worker_24877-63506.jpg?w=740&t=st=1665746216~exp=1665746816~hmac=77239e733ca6e33a2ec91a96526dcbd5c6a8d290e4b67157465b05f18f03bb1e"
              alt="iiiid"
              height="200px"
              width="200px"
              style={{ borderRadius: "100%" }}
            />
            <h4 style={{ textAlign: "center" }}>Painter</h4>
          </div>
          <div
            style={{
              height: "200px",
              width: "200px",
              margin: "10px",
            }}
          >
            <img
              src="https://img.freepik.com/free-vector/air-conditioner-repair-repairman-with-tools_33099-272.jpg?w=826&t=st=1665746480~exp=1665747080~hmac=98262f785bbd2bf144a801fcc56037c33c6037eea2fca2ffbb1574a488c4d92f"
              alt="iiiid"
              height="200px"
              width="200px"
              style={{ borderRadius: "100%" }}
            />
            <h4 style={{ textAlign: "center" }}>Repairman</h4>
          </div>
          
        </div>
      </div>
      <div style={{margin:"25px",marginBottom:"50px",marginTop:"50px"}}>
        <Link to="/Worker">
          <h3 style={{ textAlign: "center", color: "red" }}>
            <a href="/worker.js" style={{ color: "red" }}>
              <h2>Want to work with us?</h2>
            </a>
          </h3>
        </Link>
      </div>
    </div>
  );
}
export default services;
