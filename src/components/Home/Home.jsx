import { TextField, MenuItem, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { ErrorMessage } from "..";
import Categories from "../../Data/Categories";
import "./Home.css";

const useStyles = makeStyles(() => ({
  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#3c0e06",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#3c0e06",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3c0e06",
    },
  },
}));

const Home = ({ name, setName, fetchQuestions }) => {
  const classes = useStyles();

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !difficulty || !name) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            className={classes.textField}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            className={classes.textField}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            className={classes.textField}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ backgroundColor: "#3c0e06" }}
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/quiz.svg" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
