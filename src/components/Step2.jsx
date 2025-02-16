import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blue2 from "../images/second-img.png";
import "../styles/Step1.css";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

const Step2 = ({ nextStep, prevStep }) => {
  const [plan, setPlan] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (plan) {
      navigate("/step3");
    }
  };

  const handleBack = () => {
    navigate("/step1");
  };

  return (
    <div className="step1-container">
      <div className="inner-container">
        <div className="left-box">
          <img src={blue2} alt="" />
        </div>

        <div className="right-box">
          <h1 className="step1-heading">Select your plan</h1>
          <h3 className="step1-subheading">
            You have the option of monthly or yearly billing.
          </h3>

          <div className="inside-step2-container">
            <div onClick={() => setPlan("Arcade")}>
              {" "}
              <img src={arcade} alt="" />
              <h2>Arcade</h2> <h2>$9/mo</h2>
            </div>
            <div onClick={() => setPlan("Advanced")}>
              {" "}
              <img src={advanced} alt="" />
              <h2>Advanced</h2> <h2>$12/mo</h2>
            </div>
            <div onClick={() => setPlan("Pro")}>
              {" "}
              <img src={pro} alt="" />
              <h2>Pro</h2> <h2>$15/mo</h2>
            </div>
          </div>

          <div className="bttn-container">
            <button className="submit-bttn" onClick={handleBack}>
              Go Back
            </button>
            <button className="submit-bttn" onClick={handleNext}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
