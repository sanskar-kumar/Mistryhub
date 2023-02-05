// import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
// import { useHistory } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const tokenId = localStorage.getItem('token');
    const [isloggedin, setIsloggedin] = useState(false);
    const [workerInfo, setWorkerInfo] = useState([]);
    // console.log("Token is"+ tokenId);
    axios.get('http://localhost:3000/user/data', {
        headers: { Authorization: `Bearer ${tokenId}` }

    }).then(function (response) {
        // console.log("The response is ", response);
        setIsloggedin(true);
        setWorkerInfo(response.data.authorizedData.worker);
    }).catch(function (error) {
        console.log("The error in dashboard component is ", error);
        alert("Please login first");
        navigate('/login');
    });
    const handleClick = () => {
        localStorage.removeItem('token');
        window.location.href = "/login";
    }
    return (

        <div>
            {/* {!isloggedin && <div><Link to="/Login">Already a user</Link>  </div>} */}
            {isloggedin && <div><Link to="/Detail">Find a worker</Link> 
            <h1>Dashboard</h1>
            <h3>{workerInfo.name}</h3>
            <button onClick={handleClick}>Logout</button>
            </div>}
        </div>
    );
}
export default Dashboard;
