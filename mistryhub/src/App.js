import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Worker from "./component/Worker";
import Detail from "./component/Detail";
import Card from "./component/Card";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import UnDashboard from "./component/UnDashboarrd";
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
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/check" element={<UnDashboard />} />
        <Route path="/clientRegister" element={<ClientRegister />} />
        <Route path="/clientLogin" element={<ClientLogin />} />
      </Routes>
    </>
  );
}

export default App;
