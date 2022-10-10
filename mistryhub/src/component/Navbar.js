import "./navbar.css";
function navbar() {
  return (
    <div>
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#D8D9CF" }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="hhg.com">
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
                  <a class="nav-link active" aria-current="page" href="dfdf">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="csfs">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="dsd">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="djsd.cdf"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
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
