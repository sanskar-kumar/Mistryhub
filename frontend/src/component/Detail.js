import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function Details() {
  const [workerInfo, setWorkerInfo] = useState([]);
  const handleClick = () => {
    axios
      .get(`http://localhost:8080/api/detail/${category}`)
      .then(function (response) {
        setWorkerInfo(response.data);
      });
  };
  const { category } = useParams();
  var tbd=category;
  handleClick()
  workerInfo.length ===0 ? tbd=`No ${category} Found 😥` : tbd=category;
  return (
    <div>
      <Navbar />
      
      <h1 style={{ textAlign: "center", marginTop: "15px" }}>{tbd}</h1>
      {workerInfo.map((worker) => {
          return <div className="worker-card-div"> <Card props={worker} /> </div>;
        })}
        <Footer/>
    </div>
  );
}
export default Details;