import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Footer, Header, Home, Quiz, Result } from "./components";

function App() {
  const [name, setName] = useState("initialState");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    console.log("DATA", data);
  };

  return (
    <BrowserRouter>
      <div
        className="app"
        // style={{ backgroundImage: "url(./question-marks-background.jpg)" }}
      >
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz" exact>
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result" exact>
            <Result />
          </Route>
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
