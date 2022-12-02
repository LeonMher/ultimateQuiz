import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "What's the capital of Lalalakaka?",
      answer: [
        { answerText: "Klalalaa", isTrue: false },
        { answerText: "Balakuka", isTrue: true },
        { answerText: "Trititi", isTrue: false },
        { answerText: "Klalalaa", isTrue: false },
      ],
    },
    {
      question: "When is NOW ?",
      answer: [
        { answerText: "Right now", isTrue: false },
        { answerText: "At the moment", isTrue: false },
        { answerText: "Always", isTrue: true },
        { answerText: "Never", isTrue: false },
      ],
    },
    {
      question: "What do you want ?",
      answer: [
        { answerText: "I don't know", isTrue: true },
        { answerText: "A car", isTrue: false },
        { answerText: "Something new", isTrue: false },
        { answerText: "Big Home", isTrue: false },
      ],
    },
  ];

  const handleClick = (isTrue) => {
    if (isTrue) {
      setScore(score + 1);
    }

    const currentCount = count + 1;
    if (currentCount < questions.length) {
      setCount(currentCount);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showScore ? (
        <h1>You've scored {score}</h1>
      ) : (
        <div className="container">
          {questions[count].question}
          <h1>
            {count + 1}/{questions.length}
          </h1>
          {questions[count].answer.map((quest) => {
            return (
              <div>
                <button onClick={() => handleClick(quest.isTrue)}>
                  {quest.answerText}

                </button>
              </div>
            );
          })}

          {score}
        </div>
      )}
    </div>
  );
}

export default App;