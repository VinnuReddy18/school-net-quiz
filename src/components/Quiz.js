import React, { useState, useEffect } from 'react';
import './styles/Quiz.css';
import { questions } from '../data/questions';
import ProgressBar from './ProgressBar';

function Quiz({ category, level }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Implement timer logic here
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOptionClick = (option) => {
    if (questions[category][level][currentQuestion].type === 'multi') {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      setSelectedOptions([option]);
    }
  };

  const handleNextQuestion = () => {
    const correctAnswer = questions[category][level][currentQuestion].answer;
    const isCorrect =
      questions[category][level][currentQuestion].type === 'multi'
        ? selectedOptions.sort().join() === correctAnswer.sort().join()
        : selectedOptions[0] === correctAnswer;

    if (isCorrect) setScore(score + 1);
    setSelectedOptions([]);

    if (currentQuestion < questions[category][level].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions[category][level].length}
        </div>
      ) : (
        <>
          <ProgressBar currentQuestion={currentQuestion + 1} totalQuestions={questions[category][level].length} />
          <div className="question-section">
            <h3>{questions[category][level][currentQuestion].question}</h3>
          </div>
          <div className="answer-section">
            {questions[category][level][currentQuestion].options.map((option, index) => (
              <button key={index} className={`answer ${selectedOptions.includes(option) ? 'selected' : ''}`} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
          <button className="next-btn" onClick={handleNextQuestion} disabled={selectedOptions.length === 0}>
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
