import React, { useState } from "react";
import "../styles/global.scss";
import "../styles/otp.scss";
import "../styles/registerform.scss";

const ChangePass = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <div className="otp-container">
    <img src="/imgs/content-imgs/forgotpassword@2x.png" alt="OTP Verification" className="otp-image" />
    <div className="otp-header">
      <h2>Change Password</h2>
    
    </div>
     <form>
     <div className="innotp">
     <div className="form-group">
        <img
              src="/imgs/icons/lock.png"
              style={{ width:"25px"}}
            />
          <input
            type="password"
            name="password"
            placeholder="New Password*"
            onChange={handleChange}
          />
         </div>
         <div className="form-group">
        <img
              src="/imgs/icons/lock.png"
              style={{ width:"25px"}}
            />
          <input
            type="password"
            name="password"
            placeholder="Retype New Password*"
            onChange={handleChange}
          />
         </div>
         <div className="buttons">
          <button type="submit" className="submit-btn">
       Submit
          </button>
        </div>
        </div>
     </form>
    </div>

  );
};

export default ChangePass;
