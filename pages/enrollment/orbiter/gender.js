import React, { useState } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";


const GenderSelection = () => {
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
                        <h2>What is your gender?</h2>
                        <div className="gender-options">
                            <div
                                className={`gender-icon ${selectedGender === "male" ? "selected" : ""}`}
                                onClick={() => setSelectedGender("male")}
                            >
                               <img src="/imgs/content-imgs/male@2x.png" alt="Male" />
                            </div>
                            <div
                                className={`gender-icon ${selectedGender === "female" ? "selected" : ""}`}
                                onClick={() => setSelectedGender("female")}
                            >
                                <img src="/imgs/content-imgs/female@2x.png" alt="Female" />
                            </div>
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

export default GenderSelection;
