import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';

function App() {
  const [theme, setTheme] = useState('light');
  const [category, setCategory] = useState('');
  const [quizLevel, setQuizLevel] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleRestart = () => {
    setShowQuiz(false);
    setTimeout(() => {
      setShowQuiz(true);
    }, 0); // Reset the quiz by toggling the state
  };

  const handleGoHome = () => {
    setCategory('');
    setQuizLevel('');
    setShowQuiz(false);
  };

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Quiz App</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>
      {!category ? (
        <div className="category-selection">
          <button onClick={() => setCategory('cars')}>Cars</button>
          <button onClick={() => setCategory('tech')}>Tech</button>
          <button onClick={() => setCategory('science')}>Science</button>
        </div>
      ) : !quizLevel ? (
        <div className="level-selection">
          <button onClick={() => setQuizLevel('easy')}>Easy</button>
          <button onClick={() => setQuizLevel('medium')}>Medium</button>
          <button onClick={() => setQuizLevel('hard')}>Hard</button>
        </div>
      ) : (
        <Quiz
          category={category}
          level={quizLevel}
          onRestart={handleRestart}
          onGoHome={handleGoHome}
        />
      )}
    </div>
  );
}

export default App;