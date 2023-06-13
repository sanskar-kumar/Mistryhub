// import { Route, Routes } from "react-router-dom";
import "./style.css";
// import Details from "./Detail";
function workerCard({ title, imgSrc }) {
  var tbl=`detail/${title}`;
  return (
    <div
      style={{
        height: "250px",
        width: "200px",
        margin: "10px",
      }}
    >
      <img
        src={imgSrc}
        alt="iiiid"
        height="200px"
        width="200px"
        style={{ borderRadius: "100%" }}
      />
      <h4
        id="worker-card-title"
        style={{ textAlign: "center" }}
      >
        <a href={tbl} style={{ textDecoration: "none", color:"black"}} >{title}</a>
      </h4>
    </div>
  );
}
export default workerCard;
