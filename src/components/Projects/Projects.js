import React, { Component } from "react";
import "./Projects.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  toggleAccordion = () => {
    console.log(this.state.active);
    this.setState(state => ({ active: !state.active }));
  };

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <button className="ProjectsAccordion" onClick={this.toggleAccordion}>
          Section 2
          <span style={{ float: "right", fontWeight: "bold" }}>
            {!this.state.active ? "+" : "-"}
          </span>
        </button>
        <div
          className={"AccordionPanel " + (this.state.active ? "Stretched" : "")}
        >
          <p>
            {this.props.ProjectDesc}
            <p style={{ width: "100%" }}>
              Project Repo: <a href="">asdasas</a>
            </p>
          </p>
        </div>
      </div>
    );
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="projectsContainer">
        <h1>Projects</h1>
        <span style={{ color: "rgba(255, 255, 255, 0.753)", padding: "10px" }}>
          *These are all the projects I've done so far, and proud of, with their
          corresponding Github links *
        </span>
        <Project
          ProjectDesc="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
        />
        <Project
          ProjectDesc="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
        />
        <Project
          ProjectDesc="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
        />
      </div>
    );
  }
}

export default Projects;
