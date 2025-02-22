import React, { useState } from "react";
import "../styles/global.scss";
import styles from "../styles/Listing.module.scss";
import "../styles/register.scss";
import "../styles/statistic.scss";

const Statistic = () => {
  const [activeTab, setActiveTab] = useState("Referral");

  return (
    <section className="enrollment-main fullwidth">
      {/* Header */}
      <div className="pageHeading">
        <h3>Statistics</h3>

        {/* Tabs */}
        <div className="tabs">
          <div
            className={`tab ${activeTab === "Referral" ? "active" : ""}`}
            onClick={() => setActiveTab("Referral")}
          >
            REFERRAL
          </div>
          <div
            className={`tab ${activeTab === "Business" ? "active" : ""}`}
            onClick={() => setActiveTab("Business")}
          >
            BUSINESS
          </div>
        </div>
      </div>

      <div className="innerContainer full-width">
        {/* Conditional Rendering */}
        {activeTab === "Referral" ? (
          <>
            {/* Referral Statistics */}
            <div className="stats">
              <div className="card">
                <img
                  src="/imgs/content-imgs/businessClosedCopy3@2x.png"
                  alt="Icon"
                  className="icon"
                />
                <h4>Deals Won</h4>
                <p>0</p>
              </div>

              <div className="card">
                <img
                  src="/imgs/content-imgs/ammountEarnedCopy4@2x.png"
                  alt="Icon"
                  className="icon"
                />
                <h4>Referral Earned</h4>

                <div className="incomecol">
                  <div className="income">
                    <h4>Active Income</h4>
                    <p>₹0</p>
                  </div>

                  <div className="income">
                    <h4>Passive Income</h4>
                    <p>₹0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Header */}
            <div className="details-header">
              <img src="/imgs/icons/referralsGiven@2x.png" alt="Icon" />
              <h2>Details Of Referral Given</h2>
              <p> 1</p>
            </div>

            {/* Search Box */}
            <div className={styles.searchBox}>
              <input type="text" placeholder="Name / Location / Category / Keywords" />
              <button>Search</button>
            </div>

            {/* Referral Card */}
            <div className="referral-card">
              <div className="referral-id">
                <span className="status-text">
                  Referral Id:
                </span>
                 Ref/24-25/00001591
                <span>12 Nov 2024</span>
              </div>

              <div className="category">FINANCIAL SERVICES • INSURANCE</div>

              <div className="name">Rajesh Kawatkar</div>

              <div className="actions">
                <a href="#">📱 WhatsApp</a>
                <a href="#">📞 Call</a>
              </div>

              <div className="description">
                <span className="status-text"> Product / Service referred: </span>
                Health Insurance
                <br />
                <span className="status-text">Description: </span> Health insurance for parents. Need some information.
              </div>

              <div className="status">
                <span className="status-text"> Deal Lost</span>
                <span>06 Dec 2024</span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Business Statistics */}
            <div className="stats">
              <div className="card">
                <img
                  src="/imgs/icons/referralsGivenCopy4@2x.png"
                  alt="Icon"
                  className="icon"
                />
                <h4>Referrals Given</h4>
                <p>2</p>
              </div>

              <div className="card">
                <img
                  src="/imgs/icons/dealsClosed@2x.png"
                  alt="Icon"
                  className="icon"
                />
                <h4>Deals Won</h4>
                <p>2</p>
              </div>
              
            </div>
            <div className="details-header">
              <img src="/imgs/icons/referralsGiven@2x.png" alt="Icon" />
              <h2>Details Of Referral Given</h2>
              <p> 1</p>
            </div>
            
          </>
        )}
      </div>
    </section>
  );
};

export default Statistic;
