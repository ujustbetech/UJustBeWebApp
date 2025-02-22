import React, { useState, useEffect } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";

const CompanyName = () => {

return (
    <>
        <section className="enrollment-main">
            <div>
                <div className="pageHeading">
                <button className="back-btn">←</button><h3>Business Listing</h3>
                </div>
                <div className="innerContainer">
                <div className="form-card">
                    <h2>Name of the company</h2>
                    <div className="gender-options">
                  
                    <form>
  <div className="form-field">
    <input type="text" placeholder="Type your company name" required />
  </div>
 
  
</form>
    </div>
    
                </div>
            </div>
            </div>
            <div className="navigation">
                <button>
                    <img src="/imgs/icons/previous.png" style={{ width: "40px" }} />Previous
                </button>
                <button>
                    Next  <img src="/imgs/icons/next.png" style={{ width: "40px" }} />
                </button>
            </div>
        </section>
    </>
);

};
export default CompanyName;
