import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Footer, Header, Home, Quiz, Result } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div
        className="app"
        // style={{ backgroundImage: "url(./question-marks-background.jpg)" }}
      >
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/quiz" exact>
            <Quiz />
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
