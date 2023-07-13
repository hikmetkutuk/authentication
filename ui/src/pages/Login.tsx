import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleInputChange = () => {};

  const loginUser = () => {};

  return (
    <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 mt-9">
          <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>LOGIN</small>
              </div>
              <div className="btn-wrapper text-center"></div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <form role="form" onSubmit={loginUser}>
                <div className="form-group mb-3">
                  <div className="input-group input-group-alternative">
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
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="ni ni-lock-circle-open" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary my-4">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <Link to="/forgot-password" className="text-light">
                <small>Forgot password?</small>
              </Link>
            </div>
            <div className="col-6 text-right">
              <Link to="/register" className="text-light">
                <small>Create new account</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
