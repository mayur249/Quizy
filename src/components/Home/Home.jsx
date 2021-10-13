import { TextField, MenuItem, Button, makeStyles } from "@material-ui/core";
import React from "react";
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

const Home = () => {
  const classes = useStyles();

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            className={classes.textField}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
            className={classes.textField}
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
