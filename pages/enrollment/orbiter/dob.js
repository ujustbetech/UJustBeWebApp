import React, { useState } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";


const DOBSelection = () => {
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
                        <h2>What is your date of birth?</h2>
                        <div className="gender-options">
  <form>
    <div className="form-field">
      <input type="date" placeholder="DD/MM/YYYY"  style={{ textTransform: "uppercase" }} />
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

export default DOBSelection;
