import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = ({ nextStep, prevStep }) => {
  const [plan, setPlan] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleNext = () => {
    if (plan) {
      navigate('/step3'); // Navigate to the next step
    }
  };

  const handleBack = () => {
    navigate('/step1'); // Navigate back to the previous step
  };

  return (
    <div>
      <h1>Select your plan</h1>
      <div>
        <button onClick={() => setPlan('Arcade')}>Arcade $9/mo</button>
        <button onClick={() => setPlan('Advanced')}>Advanced $12/mo</button>
        <button onClick={() => setPlan('Pro')}>Pro $15/mo</button>
      </div>
      <button onClick={handleBack}>Go Back</button>
      <button onClick={handleNext}>Next Step</button>
    </div>
  );
};

export default Step2;