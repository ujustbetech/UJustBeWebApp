import React from "react";
import "../styles/global.scss";
import "../styles/dashboard.scss";
import styles from "../styles/Listing.module.scss";

const Category = () => {

    return (
        <>
            <section className="category-container container">
                <h2>Categories</h2>
                {/* Search Bar */}
            <div className={styles.searchBox}>
                <input type="text" placeholder="Name / Location / Category / Keywords" />
                <button>Search</button>
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
            </>

);
};

export default Category;
