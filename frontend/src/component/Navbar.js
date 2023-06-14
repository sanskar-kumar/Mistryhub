import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonIcon from '@mui/icons-material/Person';
// import {Link} from "react-router-dom";

function Navbar() {
  // console.log(props);
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light justify-content-end"
          style={{ background: "linear-gradient(135deg, #e3fdfd, #cbf1f5, #a6e3e9)", fontSize: "20px" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={{ fontSize: "23px", color: 'black' }}>
              MistryHub
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/" style={{ color: 'black' }}>
                    Home
                  </a>
                </li>
          
                <li className="nav-item">
                  <a className="nav-link active" href="/#services" style={{ color: 'black' }}>
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/#search" style={{ color: 'black' }}>
                    Search
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/#FAQ" style={{ color: 'black' }}>
                    FAQ
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link active" href="/#about" style={{ color: 'black' }}>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
