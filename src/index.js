import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <Button disableElevation variant="contained">
      Home
    </Button>
  );
};

const About = () => {
  return (
    <Button disableElevation variant="contained">
      About
    </Button>
  );
};

function App() {
  return (
    <Router className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route exact path="/" children={Home} />
        <Route exact path="/about" children={About} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
