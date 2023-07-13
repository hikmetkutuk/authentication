import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState();
  return (
    <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 mt-9">
          <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>Forgot Password</small>
              </div>
              <div className="text-center"></div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <form role="form">
                <div className="form-group">
                  <div className="input-group input-group-alternative mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="ni ni-email-83" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      required
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary mt-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-right">
              <Link to="/login" className="text-light">
                <small>Login</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
