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
                            <h2>How much passive income per month would you like to earn?</h2>
                            <form>

                                <div className="buttons">
                                    <button type="button" className="border-btn">
                                        <p>1000 </p> - <p>5000</p>
                                    </button>
                                    <button type="button" className="border-btn">
                                        <p>5001 </p> - <p>15000</p>
                                    </button>
                                    <button type="button" className="border-btn">
                                        <p>15001</p> - <p>30000</p>
                                    </button>
                                    <button type="button" className="border-btn">
                                        <p>310000 </p> and above
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <button className="explorebtn">
                        Explore
                    </button>
                    <button>
                        <img src="/imgs/icons/previous.png" style={{ width: "40px" }} />Previous
                    </button>
                    <button>
                        Verify KYC  <img src="/imgs/icons/next.png" style={{ width: "40px" }} />
                    </button>
                </div>
            </section>
        </>
    );
};

export default GenderSelection;
