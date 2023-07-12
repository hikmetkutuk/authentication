import CSS from "csstype";
import { useState } from "react";
import { Link } from "react-router-dom";

const userName: CSS.Properties = {
  color: "black",
};

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav
      className="navbar navbar-top navbar-expand-md navbar-dark"
      id="navbar-main"
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link
          className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
          to="./index.html"
        ></Link>

        {/* User */}
        <ul className="navbar-nav align-items-center d-none d-md-flex">
          <li className="nav-item dropdown">
            <div className="media align-items-center">
              {isLoggedIn ? (
                <>
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="Image placeholder"
                      src="./assets/img/theme/team-4-800x800.jpg"
                    />
                  </span>
                  <div className="media-body ml-2 d-none d-lg-block">
                    <span
                      className="mb-0 text-sm  font-weight-bold"
                      style={userName}
                    >
                      Jessica Jones
                    </span>
                  </div>
                </>
              ) : (
                <div className="media-body ml-2 d-none d-lg-block">
                  <Link className="nav-link" to="">
                    <i className="ni ni-key-25 text-info" />
                    <span
                      className="mb-0 ml-2 text-sm  font-weight-bold"
                      style={userName}
                    >
                      Login
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <Link to="./examples/profile.html" className="dropdown-item">
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </Link>
              <Link to="#!" className="dropdown-item">
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
