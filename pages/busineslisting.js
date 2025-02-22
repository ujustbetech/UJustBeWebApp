import React, { useState } from "react";
import "../styles/global.scss";
import styles from "../styles/Listing.module.scss";
import "../styles/register.scss";
import "../styles/statistic.scss";
import "../styles/dashboard.scss";
import "../styles/upload.scss";

const BusinessList = () => {
  const [activeTab, setActiveTab] = useState("Referral");

  return (
    <section className="enrollment-main ">
      {/* Header */}
      <div className="pagetitle">
        <button className="back-btn">←</button>
        <h3>Business Listing</h3>
      
            </div>
       

       

      <div className="innerContainer fullwidth">
      <div className={styles.searchBox}>
                <input type="text" placeholder="Name / Location / Category / Keywords" />
                <button>Search</button>
            </div>
      <section className="category-container container dashboardSections">
                <div className="sectionHeader">
                    <h2>Categories</h2>
                    <a href="">View All</a>
                </div>

                <div className="category-box">
                    <ul>
                    <li>
                            <span><img src="/imgs/categories/education.png" /></span>

                            <h5>AMCs</h5>
                        </li>
                        <li>
                            <span><img src="/imgs/categories/education.png" /></span>

                            <h5>Account and Taxation</h5>
                        </li>
                        <li>
                            <span><img src="/imgs/categories/education.png" /></span>

                            <h5>Advtg & Marketing</h5>
                        </li>
                        <li>
                            <span><img src="/imgs/categories/education.png" /></span>

                            <h5>Agent</h5>
                        </li>
                       
                    </ul>

                </div>
            </section>
            <section className="category-container container dashboardSections">
  <div className="sectionHeader">
    <h2>Promotions</h2>
  </div>

  <div className="promotions-slider">
    <div className="promotion-card">
      <img src="/imgs/promotion1.png" alt="Promotion 1" />
    </div>
    <div className="promotion-card">
      <img src="/imgs/promotion2.png" alt="Promotion 2" />
    </div>
    <div className="promotion-card">
      <img src="/imgs/promotion3.png" alt="Promotion 3" />
    </div>
  </div>
</section>

            <section className="category-container container dashboardSections">
              
                <div className={styles.CardWrapper}>
                    <ul>
                        <li
                            className={styles.listingCard}
                        >
                            <div className={styles.profileimage}>

                                <img
                                    src=
                                    "/imgs/icons/userCopy@2x.png"

                                />

                            </div>

                            <div class={styles.description}>
                                <div class={styles.buzcategory}>
                                    <span>IT TECH</span>
                                    </div><h2>Karuyaki Solutions </h2>
                                    <h4>Orbitor</h4>
                                    <h6>Shatarataka CHSL, Near RTO, Four Bungalows, Andheri (West), Mumbai - 400053</h6>
                                    <div class={styles.actionbtn}>
                                        <button>Refer now</button>

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
      </div>
     
    </section>
    
  );
};

export default BusinessList;
