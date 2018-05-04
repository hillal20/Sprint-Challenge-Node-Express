import React, { Component } from "react";
import axios from "axios";

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: []
    };
  }

  fetchingActions = () => {
    axios
      .get("http://localhost:5002/actions")
      .then(response => {
        console.log("response", response);
        this.setState({ actions: response.data });
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  componentDidMount = () => {
    this.fetchingActions();
  };
  render() {
    return (
      <div>
        <h1> actions </h1>
      </div>
    );
  }
}
export { Actions };
