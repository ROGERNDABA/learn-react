import React, { Component } from "react";
import "./Home.css";
import Typewriter from "../plugins/Typewriter";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    document.title = "Roger's Resume";
  }

  render() {
    return (
      <div className="homeContainer">
        <div className="ImageContainer">
          <a href="/roger.png" target="_blank">
            <img
              className="profileImage"
              src="/roger.png"
              alt="The handsome and sexy roger"
              title="The handsome and sexy roger"
            />
          </a>
        </div>
        <div className="Quote">
          <em>
            <Typewriter
              text='"You have not experienced real programming until you make a 5 dimensional array, with objects at every even dimension and construct a logical function to work with it in one go, but then google how to change a string into a number" - Me'
              speed="50"
            />
          </em>
        </div>
      </div>
    );
  }
}

export default Home;
