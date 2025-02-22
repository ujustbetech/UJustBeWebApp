import React, { useState } from "react";
import "../styles/global.scss";
import "../styles/registerform.scss";
import "../styles/register.scss";
import "../styles/statistic.scss";
import "../styles/upload.scss";

const Social = () => {
  const [activeTab, setActiveTab] = useState("Referral");

  return (
    <section className="enrollment-main fullwidth">
      {/* Header */}
      <div className="pagetitle">
        <button className="back-btn">←</button>
        <h3>Contact Details</h3>
      
            </div>
       

      <div className="innerContainer full-width">
      <div className="contact-item">
          <img src="/imgs/icons/email.png" alt="Email Icon" className="icon" />
          <div>
            <p className="contact-title">EMAIL</p>
            <p className="number">connectujustbe@gmail.com</p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="contact-item">
          <img src="/imgs/content-imgs/phone-call.png" alt="Phone Icon" className="icon" />
          <div>
            <p className="contact-title">PHONE</p>
            <p className="number">+91 93260 62258</p>
            <p className="number">+91 99305 57558</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-section">
          <p className="number">FOLLOW US ON</p>
          <div className="social-images">
            <img src="/imgs/content-imgs/facebook.png" alt="Facebook" className="social-img" />
            <img src="/imgs/content-imgs/instagram.png" alt="Instagram" className="social-img" />
            <img src="/imgs/content-imgs/linkedin.png" alt="LinkedIn" className="social-img" />
            <img src="/imgs/content-imgs/youtube.png" alt="YouTube" className="social-img" />
        
      </div>
      </div>
      </div>
   
    </section>
  );
};

export default Social;
