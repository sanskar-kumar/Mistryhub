import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";

function Details() {
  const [workerInfo, setWorkerInfo] = useState([]);
  const handleClick = (event) => {
    axios.get("http://localhost:3000/detail").then(function (response) {
      setWorkerInfo(response.data);
      console.log(workerInfo);
    });
  };

  return (
    <div>
      <Navbar />
      <button onClick={handleClick}>Get all worker details</button>
      {workerInfo.map((work) => {
        return <>
        <div className="worker-card-div"> <Card props={work}/></div>
       
        </>;
      })}
    </div>
  );
}
export default Details;
