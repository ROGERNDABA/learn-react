import React, { Component } from "react";
import "./Home.css";
import myProfile from "./roger2.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="homeContainer">
        <div className="ImageContainer">
          <img className="profileImage" src={myProfile} alt="" />
        </div>
        <div className="Quote">
          <p>
            <em>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              congue metus ut lacus posuere, et pharetra ex pellentesque. Sed
              volutpat neque neque, at finibus felis condimentum blandit.
              Phasellus venenatis neque ac leo porttitor gravida. Nullam aliquet
              mattis diam dignissim venenatis." - Rxcxc
            </em>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
