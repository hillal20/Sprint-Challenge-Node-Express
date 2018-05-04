import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  fetchingProjects = () => {
    axios.get("http://localhost:5002/projects").then(response => {
      console.log("response", response);
      this.setState({ projects: response.data });
    });
  };
  componentDidMount = () => {
    this.fetchingProjects();
  };
  render() {
    const { projects } = this.state;

    return (
      <div>
        {projects.map((project, index) => {
          console.log("project", project);
          return (
            <div key={index} className="Project">
              <div key={project.name}> name: {project.name}</div>
              <div key={project.completed}>
                completed: {project.completed.toString()}
              </div>
              <div key={project.description}>
                description: {project.description}
              </div>
              <Link to={`/actions/${project.id}`}>
                <button> Actions </button>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export { ProjectsList };
