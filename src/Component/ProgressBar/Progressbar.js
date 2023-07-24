import React, { useEffect, useState } from 'react';
import './progressBar.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage((currentStep / totalSteps) * 100);
  }, [currentStep, totalSteps]);

  return (
    <div className="progressBar">
      <div
        className="progressBarChange"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
