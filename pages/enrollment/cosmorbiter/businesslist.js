import React from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";


const BusinessList = () => {
   

    return (
        <>
            <section className="enrollment-main">
                <div>
                    <div className="pageHeading">
                    <button className="back-btn">←</button><h3>Business Listing</h3>
                    </div>
                    <div className="innerContainer">
                    <div className="form-card">
                        <h2>Are you</h2>
                        <form>
                  
                  <div className="buttons">
                  <button type="button" className="border-btn">
  Individual/Proprieter
    </button>
    <button type="button" className="border-btn">
     Partnership Firm
    </button>
    <button type="button" className="border-btn">
   LLP
    </button>
    <button type="button" className="border-btn">
   Company
    </button>
   
    </div>
  
</form>
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

export default BusinessList;
