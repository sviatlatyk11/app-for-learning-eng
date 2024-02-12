import React, { useState, useEffect } from "react";
import './quiz.css';

const Quiz = () => {
  // State variables
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [quizSets, setQuizSets] = useState([]);
  const [currentSet, setCurrentSet] = useState(0);

  // Fetch quiz sets from the database or API on component mount
  useEffect(() => {
    fetch('/units/kitchen')
      .then(response => response.json())
      .then(data => {
        setQuizSets(data); // Assuming data is an array of quiz sets
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching quiz sets:', error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  // Loading indicator if quizSets is not available
  if (!quizSets || quizSets.length === 0) {
    return <div>Loading...</div>;
  }

  // Get the current set data from quizSets
  const currentSetData = quizSets[currentSet];
  
  // Check if currentSetData or its exercises are not available
  if (!currentSetData || !currentSetData.exercises || currentSetData.exercises.length === 0) {
    return <div>No questions available</div>;
  }

  // Extract current set questions and total questions count
  const currentSetQuestions = currentSetData.exercises;
  const totalQuestions = currentSetQuestions.length;

  // Destructure current question details
  const { task, correct_answer, incorrect_answers } = currentSetQuestions[activeQuestion];

  // Handle next button click
  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    // Check if it's the last question in the set
    if (activeQuestion !== totalQuestions - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      // Check if it's the last set
      if (currentSet !== quizSets.length - 1) {
        setActiveQuestion(0);
        setCurrentSet((prev) => prev + 1);
      } else {
        setActiveQuestion(0);
        setCurrentSet(0);
        setShowResult(true);
      }
    }
  };

  // Handle answer selection
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer === correct_answer);
  };

  // Helper function to add leading zero to a number
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  // Render the quiz component
  // ...

// Render the quiz component
return (
  <div className="quiz-container">
    {!showResult ? (
      // Render remaining sets information before questions
      <div>
      </div>
    ) : (
      // Render result summary
      <div className="result">
        <h3>Result</h3>
        <p>
          Total Sets: <span>{quizSets.length}</span>
        </p>
        <p>
          Total Score:<span> {result.score}</span>
        </p>
        <p>
          Correct Answers:<span> {result.correctAnswers}</span>
        </p>
        <p>
          Wrong Answers:<span> {result.wrongAnswers}</span>
        </p>
      </div>
    )}
    
    {!showResult && (
      // Render questions and options
      <div>
        <div>
          {/* Display sets remaining count */}
          <h2 className="sets-remaining">
            Questions Remaining: {quizSets.length - currentSet}
          </h2>
        </div>
        <h2>{task}</h2>
        <ul>
          {/* Render answer options */}
          {[correct_answer, ...incorrect_answers].map((answer, index) => (
            <li
              onClick={() => onAnswerSelected(answer, index)}
              key={answer}
              className={selectedAnswerIndex === index ? 'selected-answer' : null}>
              {answer}
            </li>
          ))}
        </ul>
        <div className="flex-right">
          {/* Render next/finish button */}
          <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
            {activeQuestion === totalQuestions - 1 &&
            currentSet === quizSets.length - 1
              ? 'Finish'
              : 'Next'}
          </button>
        </div>
      </div>
    )}
  </div>
);

}

export default Quiz;
