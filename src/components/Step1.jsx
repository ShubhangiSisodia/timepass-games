import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Step1.css";
import blue from "../images/first-img.png";

const Step1 = ({ nextStep }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleNext = () => {
    // Reset errors
    setErrors({ name: "", email: "", phone: "" });

    // Validate fields
    let hasError = false;
    if (!name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "This field is required",
      }));
      hasError = true;
    }
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "This field is required",
      }));
      hasError = true;
    }
    if (!phone) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "This field is required",
      }));
      hasError = true;
    }

    // If no errors, navigate to the next step
    if (!hasError) {
      navigate("/step2");
    }
  };

  const clearError = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <div className="step1-container">
      <div className="inner-container">
        <div className="left-box">
          <img src={blue} alt="" />
        </div>

        <div className="right-box">
          <h1 className="step1-heading">Personal info</h1>
          <h3 className="step1-subheading">
            Please provide your name, email address, and phone number.
          </h3>

          <div className="input-box">
            <h4>Name</h4>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearError("name");
              }}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="input-box">
            <h4>Email Address</h4>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearError("email");
              }}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="input-box">
            <h4>Phone Number</h4>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                clearError("phone");
              }}
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}
          </div>

          <div className="bttn-container">
            <button className="submit-bttn" onClick={handleNext}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
