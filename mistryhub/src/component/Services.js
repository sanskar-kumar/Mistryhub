import "./style.css";
import {Link} from "react-router-dom";
function services() {
  return (
    <div style={{marginBottom:"100px"}}>
      <div
        class="d-flex mx-auto"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mZtoDnJ_WX79D7tjjwg3ZLSJ7HYdu9PWehe1W814&s"
              alt="iiiid"
              height="200px"
              width="200px"
              style={{ borderRadius: "100%" }}
            />
            <h4 style={{ textAlign: "center" }}>Mason</h4>
          </div>
        </div>
      </div>
      <Link to="/Worker"><h3 style={{textAlign:"center",color:"red"}}><a href="/worker.js" style={{color:"red"}}> Want to work with us?</a></h3></Link>
    </div>
  );
}
export default services;
