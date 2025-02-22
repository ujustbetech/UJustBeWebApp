import React, { useState } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";



const SourceSelection = () => {
    const [selectedGender, setSelectedGender] = useState(null);

    return (
        <>
            <section className="enrollment-main">
                <div>
                    <div className="pageHeading">
                        <button>back</button><h3>Enroll as Partner</h3>
                    </div>
                    <div className="innerContainer">
                    <div className="form-card">
                        <h2>How did you come to know about UJustBe?</h2>
                        <form>
                  
                        <div className="buttons">
                        <button type="button" className="border-btn">
           UJustBe Partner
          </button>
          <button type="button" className="border-btn">
            Whatsapp
          </button>
          <button type="button" className="border-btn">
            Facebook
          </button>
          <button type="button" className="border-btn">
            Linkedin
          </button>
          <button type="button" className="border-btn">
            Instagram
          </button>
          <button type="button" className="border-btn">
            Other
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

export default SourceSelection;
