import React, { Component } from "react";
import "./Home.css";
import myProfile from "./roger2.png";
import Typewriter from "../plugins/Typewriter";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    document.title = "Home";
  }

  render() {
    return (
      <div className="homeContainer">
        <div className="ImageContainer">
          <img className="profileImage" src={myProfile} alt="" />
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
