import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ progress }) => {
  return (
    <div className="progress-tracker">
      <h4>Progress: {progress}%</h4>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressTracker;
