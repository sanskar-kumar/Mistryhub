import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Worker from "./component/About";
import Detail from "./component/Detail";
import Card from "./component/Card";
import WorkerLogin from "./component/WorkerLogin";
import WorkerRegister from "./component/WorkerRegister";
import ClientDashboard from "./component/ClientDashboard";
import WorkerDashboard from "./component/WorkerDashboard";
import ClientRegister from "./component/ClientRegister";
import ClientLogin from "./component/ClientLogin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worker" element={<Worker />} />
        <Route path="/detail/:category" element={<Detail />} />
        <Route path="/card" element={<Card />} />
        <Route path="/workerLogin" element={<WorkerLogin />} />
        <Route path="/workerRegister" element={<WorkerRegister/>}/>
        <Route path="/clientRegister" element={<ClientRegister />} />
        <Route path="/clientLogin" element={<ClientLogin />} />
        <Route path="/clientDashboard" element={<ClientDashboard/>}/>
        <Route path="/workerDashboard" element={<WorkerDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
