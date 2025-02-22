import React, { useState, useEffect } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";
import "../../../styles/upload.scss";


const Upload = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

return (
    <>
        <section className="enrollment-main">
            <div>
                <div className="pageHeading">
                <button className="back-btn">←</button>
                <h3>Business Listing</h3>
                </div>
                <div className="innerContainer">
                <div className="form-card">
                    <h2>Upload Your Company Logo</h2>
                    <p className="optional-text">(Optional)</p>

                    <div className="gender-options">
                    <div className="logo-wrapper">
        <label htmlFor="logoInput">
          <div className="logo-circle">
            {image ? (
              <img src={image} alt="Uploaded Logo" className="uploaded-logo" />
            ) : (
              <img src="/imgs/content-imgs/businessprofileCopy@2x.png" alt="Default Icon" className="default-icon" />
            )}
            <div className="camera-icon">
              <img src="/imgs/icons/camera@2x.png" alt="Camera Icon" />
            </div>
          </div>
        </label>
        <input id="logoInput" type="file" accept="image/*" onChange={handleImageChange} />
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
export default Upload;
