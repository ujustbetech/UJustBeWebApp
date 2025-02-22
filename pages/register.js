import React, { useState } from "react";
import "../styles/global.scss";
import "../styles/register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  return (
    <div className="register-page">
      {/* Logo Section */}
      <div className="logo">
        <img
          src="/images/ujustbelogo.png"
          alt="U Just Be Logo"
          className="logo-img"
        />
      </div>

      {/* Sign Up Options */}
      <div className="signup">
      <h2>Sign up with</h2>
      </div>
      
      <div className="social-buttons">
        <button className="social-btn google"> <img
          src="/imgs/icons/Google@2x.png"
          
        /></button>
        <button className="social-btn facebook"><img
          src="/imgs/icons/facebook@2x.png"></img></button>
        <button className="social-btn linkedin"><img
          src="/imgs/icons/linkedin@2x.png"></img></button>
      </div>

      <div className="separator">
      <span>or</span>
      </div>

      {/* Register & Sign In */}
      <div className="auth-buttons">
        <button className="register-btn">New to UJustBe? Register</button>
        <button className="register-btn">Sign in</button>
      </div>

      {/* Learn More Section */}
      <div className="learn-more">
        <a href="/learn-more" className="learn-more-link">
          Learn more
        </a>
        <img
              src="/imgs/icons/play@2x.png"
              style={{ width:"25px"}}
            />
      </div>

      {/* Terms & Conditions */}
      <p className="terms">
        By signing up, you accept the{" "}
        <a href="/terms" className="terms-link">
          Terms and Conditions
        </a>.
      </p>
    </div>
  );
};

export default Register;
