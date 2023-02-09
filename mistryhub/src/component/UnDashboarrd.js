import { useState } from "react";
import BarChart from "./BarChart";
function UnDashboard() {
    
    // const [workerInfo, setWorkerInfo] = useState([]);
    return (
        <div>
      <div className="dashboard">
        <div className="col1">
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="profile-user-description">
              <h1>Electrician</h1>
              <h1>5</h1>
              <h1>Delhi</h1>
              <h1>9876543211</h1>
              <p className="worker-description">Lorem ipsiIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="services-count">
            <div className="services-done">
              <h2>Services Done</h2>
            </div>
            <div className="services-pending">
              <h2>Servies Pending</h2>
            </div>
          </div>
          <div className="chart"><BarChart/></div>
        </div>
      </div>
      <button>Logout</button>
    </div>
    )
}
export default UnDashboard;