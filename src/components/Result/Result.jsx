import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    console.log("IN RESULT");
    if (!name) {
      history.push("/");
    }
  }, [name, history]);
  return (
    <div className="result">
      <span className="title">Final Score: {score}</span>
      <Link to="/">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{
            alignSelf: "center",
            marginTop: 20,
            backgroundColor: "#3c0e06",
          }}
        >
          Go To Homepage
        </Button>
      </Link>
    </div>
  );
};

export default Result;
