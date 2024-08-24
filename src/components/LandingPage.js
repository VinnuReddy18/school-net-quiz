import React from 'react';
import './styles/LandingPage.css';  // Ensure the path is correct

function LandingPage({ onQuizSelect }) {
  return (
    <div className="landing-page">
      <header>
        <h1 className="landing-title">Super Crazy Quiz App</h1>
        <p className="landing-subtitle">Test your knowledge across different levels!</p>
      </header>

      <div className="quiz-selection">
        <div className="quiz-option" onClick={() => onQuizSelect('easy')}>
          <img src="/path/to/3d-shape1.png" alt="Easy Quiz" />
          <h2>Easy Quiz</h2>
          <p>Start with basic questions to warm up.</p>
        </div>
        <div className="quiz-option" onClick={() => onQuizSelect('medium')}>
          <img src="/path/to/3d-shape2.png" alt="Medium Quiz" />
          <h2>Medium Quiz</h2>
          <p>Challenge yourself with intermediate questions.</p>
        </div>
        <div className="quiz-option" onClick={() => onQuizSelect('hard')}>
          <img src="/path/to/3d-shape3.png" alt="Hard Quiz" />
          <h2>Hard Quiz</h2>
          <p>Prove your expertise with tough questions.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
