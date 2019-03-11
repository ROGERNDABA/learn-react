import React, { Component } from "react";
import "./TechStack.css";
import Stacks from "./Stacks";

function importAll(r) {
  var images = {};
  r.keys().forEach(function(key) {
    var Imgname = key.match(/([^/.]+)$|([^/]+)(\.[^/.]+)$/)[2].toUpperCase();
    images[Imgname] = r(key);
  });
  return images;
}

const Images = importAll(
  require.context("../../images", true, /\.(png|jpe?g|svg)$/)
);

class TechStack extends Component {
  state = {};
  componentDidMount() {
    document.title = "Technology Stack";
  }

  render() {
    return (
      <div className="TechStackContainer">
        <div className="Heading">Technology Stack</div>
        <div className="TechStackLogos">
          <div className="container">
            {/* ///////////// FUnDAMENTALS ///////// */}
            <Stacks
              heading="Fundamental Programming"
              stack={[
                { rate: 4, C: Images["C"] },
                { rate: 5, "C++": Images["CPP"] },
                { rate: 3, Python: Images["PYTHON"] },
                { rate: 3, Java: Images["JAVA"] }
              ]}
            />
            {/* ///////////// Web: Frontend ///////// */}
            <Stacks
              heading="Web Development: Front End and Basics"
              stack={[
                { rate: 5, "HTML + Css": Images["BASICS"] },
                { rate: 5, Javascript: Images["JAVASCRIPT"] },
                { rate: 4, Typescript: Images["TS"] },
                { rate: 5, Jquery: Images["JQUERY"] },
                { rate: 5, "Bootstrap 4": Images["BOOTSTRAP"] }
              ]}
            />
            {/* ///////////// Web Backend ///////// */}
            <Stacks
              heading="Web Development: Back End, Frameworks and Libraries"
              stack={[
                { rate: 5, "Node JS": Images["NODEJS"] },
                { rate: 2, "Python Flask": Images["FLASK"] },
                { rate: 5, PHP: Images["PHP"] },
                { rate: 3, "Angular JS": Images["ANGULAR"] },
                { rate: 4, "React JS": Images["REACT"] },
                { rate: 2, "Electron JS": Images["ELECTRON"] },
                { rate: 4, "Adobe Coldfusion": Images["CF"] }
              ]}
            />
            {/* ///////////// Databases ///////// */}
            <Stacks
              heading="Databases"
              stack={[
                { rate: 3, SQL: Images["SQL"] },
                { rate: 4, MySQL: Images["MYSQL"] },
                { rate: 2, SQLite: Images["SQLITE"] },
                { rate: 5, "MongoDB with mongoose": Images["MONGO"] }
              ]}
            />
            {/* ///////////// Mobile DEv ///////// */}
            <Stacks
              heading="Mobile Development"
              stack={[
                { rate: 1, Ionic: Images["IONIC"] },
                { rate: 3, "React Native": Images["REACT"] }
              ]}
            />
            {/* /////////// Cloud ///////// */}
            <Stacks
              heading="Cloud Technology"
              stack={[{ rate: 3, Docker: Images["DOCKER"] }]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TechStack;
