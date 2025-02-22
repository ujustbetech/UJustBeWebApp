import React, { useState } from "react";
import "../styles/global.scss";
import "../styles/registerform.scss";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number (10 digits required)";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOpenModal = () => {
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    
    <section className="enrollment-main fullwidth">
        <div>
            <div className="pageHeading">
                <button>back</button><h3>Sign Up</h3>
            </div>
            <div className="innerContainer">
      <form>
        <div className="form-group">
        <img
              src="/imgs/icons/profile.png"
              style={{ width:"25px"}}
            />
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
        <img
              src="/imgs/icons/profile.png"
              style={{ width:"25px"}}
            />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
        <img
              src="/imgs/icons/email.png"
              style={{ width:"25px"}}
            />
          <input
            type="email"
            name="email"
            placeholder="Email Id*"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          
        <img
              src="/imgs/icons/mobile.png"
              style={{ width:"25px"}}
            />
          <select>
            <option value="+91">+91</option>
          </select>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number*"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div className="form-group">
        <img
              src="/imgs/icons/lock.png"
              style={{ width:"25px"}}
            />
          <input
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="buttons">
          <button type="button" className="primary-btn" onClick={handleOpenModal}>
            Continue to sign up as Partner
          </button>
          <button type="button" className="secondary-btn">
            Be our Guest
          </button>
        </div>
      
      </form>
      </div>
  
      

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-icon" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>
              Sign up <span>as Partner</span>
            </h2>
            <img
              src="/imgs/content-imgs/partnerpopup@2x.png"
              alt="Partner Icon"
              style={{ marginBottom: "16px", width: "80px" }}
            />
            <p>
              Being a Partner at UJustBe opens up wonderful possibilities to
              connect with people, earn effortlessly by passing referrals, and
              grow personally and professionally by learning and sharing ideas
              in various UJustBe forums.
            </p>
            <button className="continue-btn" onClick={handleCloseModal}>
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
    </section>
  );
  
  
};

export default RegistrationForm;
