import React, { useState } from "react";
import "../../../styles/profile.scss";
import "../../../styles/statistic.scss";
import "../../../styles/global.scss";
import "../../../styles/register.scss";


const ProfileCard = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [businessTab, setBusinessTab] = useState("ABOUT"); // Separate state for business tabs

  return (
    <section className="enrollment-main fullwidth">
      {/* Tabs */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => setActiveTab("personal")}
        >
          PERSONAL
        </div>
        <div
          className={`tab ${activeTab === "business" ? "active" : ""}`}
          onClick={() => setActiveTab("business")}
        >
          BUSINESS
        </div>
      </div>

      <div className="innerContainer full-width">
        {activeTab === "personal" ? (
          <>
            {/* Profile Image Section */}
            <div className="profile-image-section">
              <img src="/imgs/profile.png" alt="Profile" className="profile-pic" />
              <img src="/imgs/icons/camera@2x.png" alt="Camera" className="camera-icon" />
            </div>

            {/* Profile Details */}
            <div className="profile-details">
              <p className="profile-code">Code - UJB1012200001166</p>
              <h2>Ruchita Godse</h2>
              <a href="#" className="referral-link">View Referral Statistics →</a>
            </div>

            {/* Connects Section */}
            <div className="connects">
              <p>My Connects</p>
              <div className="mentor">
                <img src="/imgs/mentor.jpg" alt="Mentor" />
                <span>Mentor</span>
              </div>
            </div>

            {/* About Section */}
            <div className="about-section">
              <h3>About</h3>

              <div className="about-items">
                <span>Description</span>
                <a href="#">Add answer</a>
              </div>

              <div className="about-item">
                <span>How much passive income would you like to earn</span>
                <p>₹ 5001-15000 </p>
                <img src="/imgs/icons/editCopy3@2x.png" alt="Edit" className="edit-icon" />
              </div>

              <div className="about-item">
                <span>How did you come to know about UJustBe?</span>
                <p>UJustBe Partner</p>
              </div>

              <div className="about-item">
                <span>Enter localities where you have a lot of connects</span>
                <p>Mumbai, Thane, Mumbai</p>
                <img src="/imgs/icons/editCopy3@2x.png" alt="Edit" className="edit-icon" />
              </div>
            </div>
            <div className="about-section">
      <h3>Basic Details</h3>

    

      <div className="about-item">
        <span>Gender</span>
        <p>Female </p>
        <img src="/imgs/icons/editCopy3@2x.png" alt="Edit" className="edit-icon" />
      </div>
      <div className="about-item">
        <span>Date of Birth</span>
        <p>21 March 2003 </p>
        <img src="/imgs/icons/editCopy3@2x.png" alt="Edit" className="edit-icon" />
      </div>
      <div className="about-item">
        <span>Marital Status</span>
        <p>Single </p>
        <img src="/imgs/icons/editCopy3@2x.png" alt="Edit" className="edit-icon" />
      </div>
      
</div>
            {/* Contact Details */}
            <div className="contact-details">
              <h3>Contact Details</h3>

              <div className="contact-item">
                <img src="/imgs/icons/email.png" alt="Email" className="contact-icon" />
                <span>ruchitagodse217@gmail.com</span>
              </div>

              <div className="contact-item">
                <img src="/imgs/icons/mobile.png" alt="Phone" className="contact-icon" />
                <span>+91 9372321663</span>
              </div>

              <div className="contact-item">
                <img src="/imgs/icons/location.png" alt="Location" className="contact-icon" />
                <span>
                  Room No: B/6, Plot No.123, Malad West, Malwani Chaya LTD, Gate No.8,
                  Maharashtra, India
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Business Profile Image */}
            <div className="profile-image-section">
              <img src="/imgs/profile.png" alt="Business Banner" className="profile-pic" />
              <img src="/imgs/icons/camera@2x.png" alt="Camera" className="camera-icon" />
            </div>

            {/* Business Code */}
            <p className="business-code">UJB10122000001166</p>
            <span className="rating">⭐ 3</span>

            {/* Business Info */}
            <div className="business-info">
              <div className="business-icon">
                <img src="/imgs/content-imgs/businessprofileCopy@2x.png" alt="Business Icon" />
              </div>
              <h3 className="business-title">ACCOUNTS AND TAXATION</h3>
              <h2 className="business-name">Test</h2>
              <p className="business-type">Testing</p>
              <p className="business-location">
                <i className="fa fa-map-marker"></i> 3, Andheri West, Mumbai, Maharashtra, 400047
              </p>
              <a href="#" className="business-link">View Business Statistics →</a>
            
            </div>

            {/* Business Navigation Tabs */}
            <div className="business-navigation">
              {["ABOUT", "SERVICES", "PRODUCTS"].map((tab) => (
                <span
                  key={tab}
                  className={`nav-item ${businessTab === tab ? "active" : ""}`}
                  onClick={() => setBusinessTab(tab)}
                >
                  {tab}
                </span>
              ))}
            </div>

           
    <div className="tab-content">
      {businessTab === "ABOUT" && (
        <div className="about-section">
          <h3 className="business-heading">Xyz</h3>
          <div className="business-row">
          <img src="/imgs/icons/url@2x.png" alt="Corporate URL" className="business-icon" />
            <span className="business-label">Corporate URL</span>
            <a href="#" className="business-link">Add Url</a>
         
          </div>
        </div>
      )}

{businessTab === "SERVICES" && (
        <div className="services-section">
          <p className="no-services-text">No services added</p>
          <div className="buttons">
          <button className="border-btn">Add services</button>
          </div>
        </div>
      )}
         {businessTab === "PRODUCTS" && (
        <div className="services-section">
          <p className="no-services-text">No products added</p>
          <div className="buttons">
          <button className="border-btn">Add products</button>
          </div>
        </div>
      )}
    </div>

          </>
        )}
      </div>
    </section>
  );
};

export default ProfileCard;
