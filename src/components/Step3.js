import React, { useState } from 'react';

const Step3 = ({ nextStep, prevStep }) => {
  const [addOns, setAddOns] = useState([]);

  const handleNext = () => {
    nextStep();
  };

  return (
    <div>
      <h1>Pick add-ons</h1>
      <div>
        <label>
          <input type="checkbox" value="Online service" onChange={(e) => setAddOns([...addOns, e.target.value])} />
          Online service +$1/mo
        </label>
        <label>
          <input type="checkbox" value="Larger storage" onChange={(e) => setAddOns([...addOns, e.target.value])} />
          Larger storage +$2/mo
        </label>
        <label>
          <input type="checkbox" value="Customizable Profile" onChange={(e) => setAddOns([...addOns, e.target.value])} />
          Customizable Profile +$2/mo
        </label>
      </div>
      <button onClick={prevStep}>Go Back</button>
      <button onClick={handleNext}>Next Step</button>
    </div>
  );
};

export default Step3;