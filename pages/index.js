import React, { useState, useRef } from "react";
import "../styles/global.scss"

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [focususer, setFocusUser] = useState(false);
  const [focuspass, setFocusPass] = useState(false);
  const [erruser, setErrUser] = useState(false);
  const [errpass, setErrPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const checkBtn = useRef(null);

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onFocususername = () => setFocusUser(true);
  const onBlurusername = () => setFocusUser(username === "");
  const onFocuspass = () => setFocusPass(true);
  const onBlurpass = () => setFocusPass(password === "");

  return (
    <div className="login-wrapper">
      <div className="card card-container">
        <div className="logo">
          <img
            src="/images/ujustbelogo.png"
            alt="profile-img"
            className="profile-img-card"
          />
        </div>
        <h1 className="signinHeading">Welcome Back</h1>
        {/* Replace Form with <form> */}
        <form>
          <div className="form-group"></div>
          <ul>
            <li className="form-group">
              <input
                type="text"
                value={username}
                onChange={onChangeUsername}
                className="form-username"
                name="username"
                onFocus={onFocususername}
                onBlur={onBlurusername}
                autoComplete="off"
              />
              <label
                htmlFor="username"
                className={focususer ? "show" : null}
              >
                Mobile Number/Email Id*
              </label>
              {erruser && <div className="errmsg">Mobile no/Email id*</div>}
            </li>
            <li className="form-group">
              <input
                type="password"
                className={"form-password" + (focuspass ? " error" : "")}
                name="password"
                value={password}
                onChange={onChangePassword}
                onFocus={onFocuspass}
                onBlur={onBlurpass}
              />
              <label
                htmlFor="password"
                className={focuspass ? "show" : null}
              >
                Password*
              </label>
              {errpass && <div className="errmsg">Password*</div>}
              <h4 className="forgotpass">Forgot Password?</h4>
            </li>
            <li className="form-group">
              <button disabled={loading}>
                {loading ? <span>Loading</span> : <span>Explore</span>}
              </button>
            </li>
          </ul>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message.map((msgdata, index) => (
                  <React.Fragment key={index}>
                    {msgdata.message}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          {/* Remove CheckButton if not defined */}
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
