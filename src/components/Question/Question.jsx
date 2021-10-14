import React, { useState } from "react";
import { ErrorMessage } from "../";
import { Button } from "@material-ui/core";
import "./Question.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Question = ({
  currQuestion,
  setCurrQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSelect = (option) => {
    if (selected === option && selected === correct) {
      return "select";
    } else if (selected === option && selected !== correct) {
      return "wrong";
    } else if (option === correct) {
      return "select";
    }
  };

  const handleCheck = (selectedOption) => {
    setSelected(selectedOption);
    if (selectedOption === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    console.log("currQuestion", currQuestion);
    if (currQuestion > 8) {
      history.push("/result");
    } else if (selected) {
      setCurrQuestion(currQuestion + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  const handleQuit = () => {
    setCurrQuestion(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1>Question {currQuestion + 1}:</h1>
      <div className="singleQuestion">
        <h2>{questions[currQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options?.map((option) => (
            <button
              onClick={() => handleCheck(option)}
              className={`singleOption ${selected && handleSelect(option)}`}
              key={option}
              disabled={selected}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="controls">
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#3c0e06",
                width: 185,
              }}
              size="large"
              onClick={handleQuit}
            >
              Quit
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#3c0e06", width: 185 }}
            size="large"
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
