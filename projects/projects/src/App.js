import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ProjectsList } from "./projectsList";
import { Actions } from "./actions";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={ProjectsList} />
          <Route path="/actions" exact component={Actions} />
        </div>
      </Router>
    );
  }
}

export default App;
