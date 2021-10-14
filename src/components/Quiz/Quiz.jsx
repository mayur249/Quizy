import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./Quiz.css";
import { Question } from "../";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQuestion]?.correct_answer,
          ...questions[currQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currQuestion]);

  console.log("SHUFFLED OPTIONS", options);

  const handleShuffle = (shuffledOptions) => {
    return shuffledOptions.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name} </span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQuestion].category}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            currQuestion={currQuestion}
            setCurrQuestion={setCurrQuestion}
            questions={questions}
            options={options}
            correct={questions[currQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
