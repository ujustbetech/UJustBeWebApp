import React, { useState } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";


const KYCPan = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileType, setFileType] = useState("");
  
    // Handle file selection
    const handleFileChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        setSelectedFile(file);
        setFileType(file.type);
      }
    };
    return (
        <>
            <section className="enrollment-main">
                <div>
                    <div className="pageHeading">
                        <button>back</button><h3>KYC Documents</h3>
                    </div>
                    <div className="innerContainer">
                    <div className="form-card">
                        <h2>Upload your PAN Card details</h2>
                        <div className="gender-options">
                        <form>
        {/* PAN Card Number Input */}
        <div className="form-field">
          <input type="text" placeholder="Pan Card Number*" required />
        </div>

        {/* File Upload (Image/PDF) */}
        <div className="form-field">
          <input 
            type="file" 
            accept="image/*, application/pdf" 
            onChange={handleFileChange} 
          />
        </div>

        {/* Image Preview (Only if Image is Uploaded) */}
        {selectedFile && fileType.startsWith("image/") && (
          <div className="image-preview">
            <img 
              src={URL.createObjectURL(selectedFile)} 
              alt="Uploaded Preview" 
              width="150" 
            />
          </div>
        )}

        {/* Upload Button */}
        <div className="buttons">
          <button type="submit" className="border-btn">
            Upload PAN Card Photo
          </button>
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
                    <div className="skip">
                <h2>Skip for later</h2>
                </div>
                </div>
                
            </section>
        </>
    );
};

export default KYCPan;
