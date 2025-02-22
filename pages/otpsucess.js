import React from 'react';
import "../styles/global.scss";
import "../styles/otp.scss";


const otpsucess = () => {
    return (
        <div className="otp-container">
        <img src="/imgs/content-imgs/otpSuccess@2x.png" alt="OTP Verification" className="otp-image" />
        <div className="otpsuccess-header">
          <h2>SUCCESS!</h2>
          <p>You have successfully registered with us</p>
          </div>
          </div>
    );
};

export default otpsucess;