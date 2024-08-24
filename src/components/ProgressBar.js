import React from 'react';
import './styles/ProgressBar.css';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      >
        <span className="progress-text">
          {Math.round(progressPercentage)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;