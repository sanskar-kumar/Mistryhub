import "./navbar.css";
// import {Link} from "react-router-dom";
function navbar() {
  return (
    <div>
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "rgb(137, 152, 228)",fontSize:"20px" }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="/" style={{fontSize:"23px" }}>
              MistryHub
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link active" href="/Worker">
                  Worker
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/#search">
                    Search
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/#FAQ">
                    FAQ
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link active" href="/#services">
                  Services
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link active" href="/login">
                  Login
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
export default navbar;
