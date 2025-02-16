import React from 'react';

const Step4 = ({ prevStep, confirm }) => {
  return (
    <div>
      <h1>Finishing up</h1>
      <div>
        <p>Arcade (Monthly) $9/mo</p>
        <p>Online service +$1/mo</p>
        <p>Larger storage +$2/mo</p>
        <p>Total (per month) $12/mo</p>
      </div>
      <button onClick={prevStep}>Go Back</button>
      <button onClick={confirm}>Confirm</button>
    </div>
  );
};

export default Step4;