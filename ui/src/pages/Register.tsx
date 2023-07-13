import CSS from "csstype";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const timesIconStyle: CSS.Properties = {
  color: "red",
  fontSize: "17px",
};

const checkIconStyle: CSS.Properties = {
  color: "green",
  fontSize: "17px",
};

function Register() {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formData;

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [specChar, setSpecChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const checkIcon = <i style={checkIconStyle} className="ni ni-check-bold" />;
  const timesIcon = <i style={timesIconStyle} className="ni ni-fat-remove" />;

  const changeIcon = (condition) => {
    if (condition) {
      return checkIcon;
    } else {
      return timesIcon;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // check lowercase and uppercase
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }

    // check number
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    // check special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSpecChar(true);
    } else {
      setSpecChar(false);
    }

    // check length
    if (password.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  return (
    <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 mt-9">
          <div className="card bg-secondary shadow border-0">
            <div className="card-header bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4">
                <small>REGISTER</small>
              </div>
              <div className="text-center"></div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <form role="form">
                <div className="form-group">
                  <div className="input-group input-group-alternative mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="ni ni-hat-3" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={name}
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
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
                <div className="text-muted font-italic">
                  <small>
                    Lowercase & Uppercase:
                    <span className="font-weight-700">{changeIcon(uCase)}</span>
                  </small>
                </div>
                <div className="text-muted font-italic">
                  <small>
                    Number (0-9):
                    <span className="font-weight-700">{changeIcon(num)}</span>
                  </small>
                </div>
                <div className="text-muted font-italic">
                  <small>
                    Special Character (!@#$%&^*+):
                    <span className="font-weight-700">
                      {changeIcon(specChar)}
                    </span>
                  </small>
                </div>
                <div className="text-muted font-italic">
                  <small>
                    At least 8 character:
                    <span className="font-weight-700">
                      {changeIcon(passLength)}
                    </span>
                  </small>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary mt-4">
                    Create account
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-right">
              <Link to="/login" className="text-light">
                <small>Have an account?</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
