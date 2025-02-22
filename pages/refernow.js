import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import "../styles/refer.scss"; // Import CSS for styling
import "../styles/global.scss";


const ReferralForm = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State for dropdown
  const [leadDescription, setLeadDescription] = useState(""); // State for input field
  const [selectedFor, setSelectedFor] = useState(null); // State for selecting "For self" or "For someone else"
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dropdown modal

  const options = [
    "Retail Fixed Benefits",
    "Health Insurance (Individual and Family)",
    "Group Health Insurance",
    "Global Health Cover",
    "Diamond Plan",
    "Platinum Plan"
  ];

  return (
    <div className="referral-container">
      {/* Header */}
      <div className="header">
        <button className="back-btn">←</button>
        <h3>Refer now</h3>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <img src="/imgs/profile.jpg" alt="Profile" className="profile-img" />
        <h4 className="profile-name">Jaygovind Gupta</h4>
         {/* Dropdown Button (Replaces Select) */}
         <button className="dropdown-btn" onClick={() => setIsDialogOpen(true)}>
          {selectedOption || "Product or Service referred*"}
        </button>

        {/* Dropdown Modal */}
        <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <DialogTitle>Select a Plan</DialogTitle>
          <DialogContent>
            <RadioGroup
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {options.map((option, index) => (
                <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsDialogOpen(false)} color="primary">
              CANCEL
            </Button>
            <Button onClick={() => setIsDialogOpen(false)} color="primary" disabled={!selectedOption}>
              OK
            </Button>
          </DialogActions>
        </Dialog>

        {/* Description Input */}
        <textarea
          className="description-input"
          placeholder="Short description of the lead*"
          value={leadDescription}
          onChange={(e) => setLeadDescription(e.target.value)}
        />

      </div>

      {/* Referral Form */}
      <div className="form-container">
       
        {/* Selection Buttons */}
        <div className="selection-container">
          <div className="selection-icon">
            <img src="/imgs/icons/referralsGiven@2x.png" alt="Selection Icon" />
          </div>
          <div className="buttons">
          <button
            className={`border-btn ${selectedFor === "self" ? "active" : ""}`}
            onClick={() => setSelectedFor("self")}
          >
            For self
          </button>
          <button
            className={`border-btn ${selectedFor === "someone" ? "active" : ""}`}
            onClick={() => setSelectedFor("someone")}
          >
            For someone else
          </button>
        </div>
        </div>

        {/* Submit Button */}
       
      </div>
      <button className="submit-btn">Send Referral</button>
    </div>
  );
};

export default ReferralForm;
