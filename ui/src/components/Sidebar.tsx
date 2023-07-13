import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav
      className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="container-fluid">
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#sidenav-collapse-main"
          aria-controls="sidenav-main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        <Link className="navbar-brand pt-0" to="./index.html">
          <h3>Auth</h3>
        </Link>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <div className="row">
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#sidenav-collapse-main"
                  aria-controls="sidenav-main"
                  aria-expanded="false"
                  aria-label="Toggle sidenav"
                >
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
          {/* Form */}
          <form className="mt-4 mb-3 d-md-none">
            <div className="input-group input-group-rounded input-group-merge">
              <input
                type="search"
                className="form-control form-control-rounded form-control-prepended"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <span className="fa fa-search" />
                </div>
              </div>
            </div>
          </form>
          {/* Navigation */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " to="./examples/profile.html">
                <i className="ni ni-single-02 text-yellow" /> User profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Sidebar;
