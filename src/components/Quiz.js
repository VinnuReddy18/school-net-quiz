import React, { useState, useEffect } from 'react';
import './styles/Quiz.css';
import { questions } from '../data/questions';
import ProgressBar from './ProgressBar';

function Quiz({ category, level, onRestart, onGoHome }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Initialize timer with 30 seconds
  const [showResult, setShowResult] = useState(false); // State to show result of current question
  const [summary, setSummary] = useState([]); // State to store summary of answers

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleNextQuestion(); // Automatically move to the next question when time runs out
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

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
        ? Array.isArray(correctAnswer) && selectedOptions.sort().join() === correctAnswer.sort().join()
        : selectedOptions[0] === correctAnswer;

    if (isCorrect) setScore(score + 1);

    // Add to summary
    setSummary([
      ...summary,
      {
        question: questions[category][level][currentQuestion].question,
        selectedOptions,
        correctAnswer,
        isCorrect,
        explanation: questions[category][level][currentQuestion].explanation
      },
    ]);

    setShowResult(true); // Show result of the current question

    setTimeout(() => {
      setShowResult(false); // Hide result after a few seconds
      setSelectedOptions([]);
      setTimeLeft(30); // Reset timer for the next question

      if (currentQuestion < questions[category][level].length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 2000); // Display result for 2 seconds
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {questions[category][level].length}</h2>
          <div className="summary-section">
            <h2>Summary</h2>
            <ul>
              {summary.map((item, index) => (
                <li key={index}>
                  <strong>Q: {item.question}</strong><br />
                  <span className={item.isCorrect ? 'correct-answer' : 'incorrect-answer'}>
                    {item.isCorrect ? 'Correct' : 'Incorrect'}
                  </span><br />
                  <strong>Your Answer:</strong> {Array.isArray(item.selectedOptions) ? item.selectedOptions.join(', ') : item.selectedOptions}<br />
                  <strong>Correct Answer:</strong> {Array.isArray(item.correctAnswer) ? item.correctAnswer.join(', ') : item.correctAnswer}<br />
                  <span className="explanation"><strong>Explanation:</strong> {item.explanation}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="result-actions">
            <button className="home-btn" onClick={onGoHome}>Go to Home</button>
          </div>
        </div>
      ) : (
        <>
          <ProgressBar currentQuestion={currentQuestion + 1} totalQuestions={questions[category][level].length} />
          <div className="timer-section">
            Time Left: {timeLeft} seconds
          </div>
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
          {showResult && (
            <div className="result-section">
              {Array.isArray(questions[category][level][currentQuestion].answer) 
                ? (
                  selectedOptions.sort().join() === questions[category][level][currentQuestion].answer.sort().join() 
                  ? <span className="correct">Correct!</span> 
                  : <span className="incorrect">Incorrect!</span>
                )
                : (
                  selectedOptions[0] === questions[category][level][currentQuestion].answer 
                  ? <span className="correct">Correct!</span> 
                  : <span className="incorrect">Incorrect!</span>
                )}
            </div>
          )}
          <button className="next-btn" onClick={handleNextQuestion} disabled={selectedOptions.length === 0}>
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;