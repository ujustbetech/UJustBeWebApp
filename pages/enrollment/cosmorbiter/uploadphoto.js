import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PhotoCamera } from "@mui/icons-material";

import "../../../styles/global.scss";
import "../../../styles/upload.scss";

const UploadProduct = () => {
  const [services, setServices] = useState([{ id: 1 }]);
  const maxServices = 5;

  const addService = () => {
    if (services.length < maxServices) {
      setServices([...services, { id: services.length + 1 }]);
    } else {
      alert("Maximum of 5 services allowed.");
    }
  };

  const removeService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <section className="upload-main">
      <div className="pagetitle">
        <button className="back-btn">←</button>
        <h3>List your Services (Max 5)</h3>
      </div>

      <div className="inner">
      {services.map((service, index) => (
  <Accordion key={service.id} defaultExpanded={index === 0} className="accordion">
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{index + 1}.</Typography>
    </AccordionSummary>
    <AccordionDetails>
              <form>
                {/* Image Upload */}
                <label className="upload-label">Add up to 5 photos (optional)</label>
      <div className="upload-box">
        <input
          type="file"
          accept="image/*"
          multiple
          className="upload-input"
        />
        <div className="upload-preview">
          <PhotoCamera />
          <p>Upload Photo (Max 300 kb)</p>
        </div>
      </div>
                {/* Service Name */}
                <div className="form-field">
                  <input type="text" placeholder="Service Name" required />
                </div>

                {/* Description */}
                <div className="form-field">
                  <textarea
                    placeholder="Description*"
                    required
                    maxLength="500"
                  ></textarea>
                </div>

                {/* URL Input */}
                <div className="form-field">
                  <img src="/imgs/icons/url@2x.png" className="input-icon" alt="URL Icon" style={{ width:"18px",marginRight:"10px"}} />
                  <input type="text" placeholder="URL (Image/Video Link) - optional" />
                </div>

         {/* Minimum Deal Value */}
<div className="form-field">
  <p>
    <input type="text" placeholder="Minimum Deal Value" required />
  </p>
</div>

                {/* Referral Percentage */}
                <label>Referral Percentage / Amount*</label>
                <div className="radio-options">
                  <label>
                    <input type="radio" name="referral" value="single" /> Single
                  </label>
                  <label>
                    <input type="radio" name="referral" value="multiple" /> Multiple
                  </label>
                  <div className="tip-container">
                  <img src="/imgs/icons/tooltip@2x.png" alt="Tip" className="tip-icon" /><h2>Tip</h2>
                  </div>
                </div>
                
                <button className="submit-btn">Save</button>
                {services.length > 1 && (
                  <button onClick={() => removeService(service.id)} className="remove-btn">
                    -remove
                  </button>
                )}
              </form>
            </AccordionDetails>
          </Accordion>
        ))}
        {services.length < maxServices && (
          <button onClick={addService} className="add-service-btn">
            + Add Another Service
          </button>
        )}
        <button className="submit-btn">Add Products</button>
        <button className="submit-btn">Go to Business KYC</button>
      </div>
    </section>
  );
};

export default UploadProduct;
