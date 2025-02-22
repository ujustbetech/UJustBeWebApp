import React, { useState } from "react";
import "../styles/global.scss";
import "../styles/otp.scss";

const OtpVerification = () => {
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
    <img src="/imgs/content-imgs/otp@2x.png" alt="OTP Verification" className="otp-image" />
    <div className="otp-header">
      <h2>OTP Verification</h2>
      <p>Please enter the 4-digit code sent to +91 7xxxxxxx31</p>
    </div>
      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>
      <a className="resend-link" href="#">
        Not received? Resend OTP!
      </a>
    </div>
  );
};

export default OtpVerification;
