import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = ({ nextStep }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate(); 

  const handleNext = () => {
    if (!name || !email || !phone) {
      alert('Please fill in all fields.');
      return;
    }
    navigate('/step2');
  };

  return (
    <div>
      <h1>Personal info</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleNext}>Next Step</button>
    </div>
  );
};

export default Step1;