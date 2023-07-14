import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  password: "",
  confirmPassword: "",
};

function ResetPassword() {
  const [formData, setFormData] = useState(initialState);
  const { password, confirmPassword } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7 mt-9">
          <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>RESET PASSWORD</small>
              </div>
              <div className="btn-wrapper text-center"></div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <form role="form">
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
                <div className="form-group">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="ni ni-lock-circle-open" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Confirm Password"
                      type="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary my-4">
                    Reset
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
export default ResetPassword;
