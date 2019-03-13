import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    let textInput = React.createRef();
  }
  render() {
    return (
      <div className="projectsContainer">
        <h1>Projects</h1>

        <button className="ProjectsAccordion">Section 1</button>
        <div className="AccordionPanel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <button className="ProjectsAccordion">Section 2</button>
        <div className="AccordionPanel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <button className="ProjectsAccordion">Section 3</button>
        <div className="AccordionPanel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
