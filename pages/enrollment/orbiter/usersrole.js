import React, { useState } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";


const UsersRoleSelection = () => {
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
                        <h2>Are you</h2>
                        <form>
                  
                  <div className="buttons">
                  <button type="button" className="border-btn">
     Homemaker
    </button>
    <button type="button" className="border-btn">
      Employee
    </button>
    <button type="button" className="border-btn">
      Student
    </button>
    <button type="button" className="border-btn">
    Retired
    </button>
    <button type="button" className="border-btn">
      Professional/Business
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

export default UsersRoleSelection;
