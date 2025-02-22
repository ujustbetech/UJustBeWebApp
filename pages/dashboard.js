import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/global.scss";
import "../styles/dashboard.scss";
import styles from "../styles/Listing.module.scss";
import "../styles/registerform.scss";

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
     const [activeTab, setActiveTab] = useState("Referral");
    
    const sliderSettings = {
        dots: true, // Enable dots for navigation
        infinite: true, // Infinite scrolling
        speed: 500, // Animation speed
        slidesToShow: 1, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        arrows: false, // Hide navigation arrows
        // autoplay: true, // Enable autoplay
        // autoplaySpeed: 3000, // Autoplay interval in milliseconds
        slidesToShow: 1,
        // centerMode: true,
        variableWidth: true
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <>
            {/* Notification Bar */}
            <section className="notification container ">
                <ul>
                    <li>
                        {new Date().toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "short",
                            day: "numeric",
                        })}
                    </li>
                    <li>
                        <img src="/images/notification.png" alt="Notification" />
                    </li>
                </ul>
            </section>

            {/* User Profile */}
            <section className="user-profile container ">
                <div className="profilePic"></div>
                <div className="userDetails">
                    <h1>Hello Ruchita</h1>
                    <h3>(Partner)</h3>
                </div>
            </section>

            {/* Search Bar */}
            <div className={styles.searchBox}>
                <input type="text" placeholder="Name / Location / Category / Keywords" />
                <button>Search</button>
            </div>

            {/* Slick Slider */}
            <section className="slider-container container dashboardSections">
                <div className="sectionHeader">
                    <h2>UJustBe as of Today</h2>
                </div>
                <Slider {...sliderSettings}>
                    <div
                        className="slider-item"

                    >
                        <div className="slides slide-1">
                            <h3>Partners</h3>
                            <p>614</p>
                            <img src="/imgs/icons/partners@2x.png" />
                        </div>
                    </div>
                    <div
                        className="slider-item"

                    >
                        <div className="slides slide-2">
                            <h3>Business closed within the community</h3>
                            <p>614</p>
                            <img src="/imgs/icons/businessClosed@2x.png" />

                        </div>
                    </div>
                    <div
                        className="slider-item"
                    >
                        <div className="slides slide-3">
                            <h3>Listed Partner</h3>
                            <p>777</p>
                            <img src="/imgs/icons/listedPartners@2x.png" />
                        </div>
                    </div>
                    <div
                        className="slider-item"

                    >
                        <div className="slides slide-4">
                            <h3>Referrals passed</h3>
                            <p>1629</p>
                            <img src="/imgs/icons/referralsPassed@2x.png" />
                        </div>
                    </div>
                </Slider>
            </section>
            <section className="statistic-container container dashboardSections">
            <div className="tab-header">
        <span
          className={activeTab === "referral" ? "active" : ""}
          onClick={() => setActiveTab("referral")}
        >
          REFERRAL
        </span>
        <span
          className={activeTab === "business" ? "active" : ""}
          onClick={() => setActiveTab("business")}
        >
          BUSINESS
        </span>
      </div>
     
        {activeTab === "business" ? (
             <div className="statistic-boxs">
          <ul>
            <li>
              <span>
                <img src="/imgs/content-imgs/businessClosedCopy3@2x.png" alt="Deals Closed" />
              </span>
              <p>Total Amount Of Business Closed</p>
              <h5>₹ 0</h5>
            </li>
            <li>
              <span>
                <img src="/imgs/icons/dealsClosed@2x.png" alt="Deals Won" />
              </span>
              <p>Total Number of Deals Won</p>
              <h5>0</h5>
            </li>
          </ul>
          </div>
        ) : (
            <div className="statistic-box">
            <ul>
            <li>
                <span><img src="/imgs/icons/referralsGivenCopy4@2x.png" /></span>
                <p>Referrals Given</p>
                <h5>2</h5>
            </li>
            <li>
                <span><img src="/imgs/icons/dealsClosed@2x.png" /></span>
                <p>Deals Won</p>
                <h5>2</h5>
            </li>
            <li>
                <span><img src="/imgs/icons/ammountEarned@2x.png" /></span>
                <p>Referrals Earned</p>
                <h5>10,8900000 Rs</h5>
            </li>
  
        </ul>
        </div>
        )}
     
            </section>
            <section className="listbutton dashboardSections container">
                <button onClick={() => setIsModalOpen(true)}>List your Business</button>
            </section>

            {/* Modal */}
            {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-icon" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>
              Sign up <span>as Partner</span>
            </h2>
            <img
              src="/imgs/content-imgs/partnerpopup@2x.png"
              alt="Partner Icon"
              style={{ marginBottom: "16px", width: "80px" }}
            />
            <p>
              Being a Listed Partner at UJustBe helps your business to flourish by providing a excellent platform to promote your product and services,both locally and gloabally.Its a simple way to attract more business from anywhere in the world
            </p>
            <button className="continue-btn" onClick={handleCloseModal}>
              Continue
            </button>
          </div>
        </div>
            )}
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
                    <h2>Business around you</h2>
                    <a href="">View All</a>
                </div>
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
                                        <button>Send Invitation</button>

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
          
        </>
    );
};

export default Dashboard;
