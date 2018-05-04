import React, { Component } from "react";
import axios from "axios";

class Actions extends Component {
  constructor(props) {
    super(props);
    console.log("props", this.props.match.params.id);
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
    const { actions } = this.state;
    console.log("a", actions);
    return (
      <div>
        {actions.map(action => {
          if (action.project_id == this.props.match.params.id) {
            return (
              <div>
                <div>{action.project_id}</div>
                <div>{action.description}</div>
                <div>{action.notes}</div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
export { Actions };
