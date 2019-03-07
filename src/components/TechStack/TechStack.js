import React, { Component } from "react";
import "./TechStack.css";
import NodejsIMG from "../../images/nodejs.png";
import JSIMG from "../../images/JavaScript.png";

class TechStack extends Component {
  state = {};
  render() {
    return (
      <div className="TechStackContainer">
        <div className="Heading">Technology Stack</div>

        <div className="TechStackLogos">
          <div className="container">
            <div className="logos">
              <img src={NodejsIMG} alt="" />
            </div>
            <div className="logos">
              <img src={JSIMG} alt="" />
            </div>
            <div className="logos">
              <img src={NodejsIMG} alt="" />
            </div>
            <div className="logos">
              <img src={NodejsIMG} alt="" />
            </div>
            <div className="logos">
              <img src={NodejsIMG} alt="" />
            </div>
            <div className="logos">
              <img src={NodejsIMG} alt="" />
            </div>
            <div className="logos">
              <img src={NodejsIMG} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechStack;
