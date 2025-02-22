import React, { useState } from "react";
import "../styles/global.scss";
import "../styles/register.scss";
import "../styles/gender.scss";

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
      <div className="inner">
      <div className="form-cards">
                        <h2>Select Languages</h2>
                        <form>
                  
                  <div className="buttons">
                  <button type="button" className="border-btn">
     English
    </button>
    <button type="button" className="border-btn">
      Hindi
    </button>
    <button type="button" className="border-btn">
      Marathi
    </button>
    <button type="button" className="border-btn">
    Gujrati
    </button>
   
    </div>
  
</form>
                   
</div>
      {/* Learn More Section */}
      <div className="learn-mores">
        <a href="/learn-more" className="learn-mores-link">
          Learn more
        </a>
        <img
              src="/imgs/icons/play@2x.png"
              style={{ width:"25px"}}
            />
      </div>

      {/* Terms & Conditions */}
      </div>
    
    </div>
  );
};

export default Register;
