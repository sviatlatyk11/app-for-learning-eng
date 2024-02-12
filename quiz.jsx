import {React, useState}  from "react"
import './quiz.css'


export const quiz = {
    topic: 'First Story',

    totalQuestions: 5,
    perQuestionScore: 5,

    questions: [
      {
        question: 'How did Tom convince his friends to let them paint the fence?',
        choices: ['He asked them to bring him some toys', 'He requested they bring him some food', 'He requested they bring him some fruit'],
        type: 'MCQs',
        correctAnswer: 'He requested they bring him some food',
      },

      {
        question: 'Why did Aunt Polly allow Tom to play after he finished painting the fence?',
        choices: ['Because she was in a good mood that day', 'Because she was impressed with how well he had painted the fence', 'Because he promised to do more chores'],
        type: 'MCQs',
        correctAnswer: 'Because he promised to do more chores',
      },
      {
        question:
          'Who did Tom meet at school that made him late, and what was the teachers response?',
        choices: ['He met a girl and the teacher did not like it', 'He met Huck Finn, and the teacher praised their friendship', 'He met a group of girls, and the teacher scolded him for talking to them'],
        type: 'MCQs',
        correctAnswer: 'He met a girl and the teacher did not like it',
      },
      {
        question:
          'How does Tom feel at the end of the passage when Becky becomes upset and walks away?',
        choices: ['Happy and relieved', 'Sad and regretful', 'Angry and frustrated'],
        type: 'MCQs',
        correctAnswer: 'Sad and regretful',
      },
      {
        question:
          'What adventure did Tom agree to with his friend Huck Finn?',
        choices: ['Visiting a haunted house', ' Going to the river to swim', 'Exploring the graveyard at midnight'],
        type: 'MCQs',
        correctAnswer: 'Exploring the graveyard at midnight',
      },
    ],
  }

  
 
 
  
  const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    // when the user clicked 'finish' - show result = true
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
  
    const { questions } = quiz
    const { question, choices, correctAnswer } = questions[activeQuestion]
  
    const onClickNext = () => {
      setSelectedAnswerIndex(null)
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      )
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1)
      } else {
        setActiveQuestion(0)
        setShowResult(true)
      }
    }
  
    const onAnswerSelected = (answer, index) => {
      setSelectedAnswerIndex(index)
      if (answer === correctAnswer) {
        setSelectedAnswer(true)
      } else {
        setSelectedAnswer(false)
      }
    }
  
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
  
    return (
      <div className="quiz-container">
        {!showResult ? (
          <div>
            <div>
              <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
              <span className="total-question">/{addLeadingZero(questions.length)}</span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
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
      </div>
    )
  }
  
  export default Quiz