import React, { useState, useEffect } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";

const BusinessTitle = () => {

return (
    <>
        <section className="enrollment-main">
            <div>
                <div className="pageHeading">
                <button className="back-btn">←</button><h3>Business Listing</h3>
                </div>
                <div className="innerContainer">
                <div className="form-card">
                    <h2>Description</h2>
                    <div className="gender-options">
                    <form>
  <div className="form-field">
    <textarea placeholder="Write a few words about your corporate profile (500 characters)" required maxLength="500"></textarea>
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
export default BusinessTitle;
