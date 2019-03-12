import React, { Component } from "react";
import "./TechStack.css";
import Stacks from "./Stacks";

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
                { rate: 4, C: "/images/c.png" },
                { rate: 5, "C++": "/images/cpp.png" },
                { rate: 3, Python: "/images/python.png" },
                { rate: 3, Java: "/images/java.png" }
              ]}
            />
            {/* ///////////// Web: Frontend ///////// */}
            <Stacks
              heading="Web Development: Front End and Basics"
              stack={[
                { rate: 5, "HTML + Css": "/images/basics.png" },
                { rate: 5, Javascript: "/images/javascript.png" },
                { rate: 4, Typescript: "/images/TS.png" },
                { rate: 5, Jquery: "/images/jquery.png" },
                { rate: 5, "Bootstrap 4": "/images/bootstrap.png" }
              ]}
            />
            {/* ///////////// Web Backend ///////// */}
            <Stacks
              heading="Web Development: Back End, Frameworks and Libraries"
              stack={[
                { rate: 5, "Node JS": "/images/nodejs.png" },
                { rate: 2, "Python Flask": "/images/flask.png" },
                { rate: 5, PHP: "/images/php.png" },
                { rate: 3, "Angular JS": "/images/angular.svg" },
                { rate: 4, "React JS": "/images/react.png" },
                { rate: 2, "Electron JS": "/images/electron.png" },
                { rate: 4, "Adobe Coldfusion": "/images/cf.png" }
              ]}
            />
            {/* ///////////// Databases ///////// */}
            <Stacks
              heading="Databases"
              stack={[
                { rate: 3, SQL: "/images/sql.png" },
                { rate: 4, MySQL: "/images/mysql.png" },
                { rate: 2, SQLite: "/images/sqlite.png" },
                { rate: 5, "MongoDB with mongoos e": "/images/mongo.png" }
              ]}
            />
            {/* ///////////// Mobile DEv ///////// */}
            <Stacks
              heading="Mobile Development"
              stack={[{ rate: 1, Ionic: "/images/ionic.png" }, { rate: 3, "React Native": "/images/react.png" }]}
            />
            {/* /////////// Cloud ///////// */}
            <Stacks heading="Cloud Technology" stack={[{ rate: 3, Docker: "/images/docker.png" }]} />
          </div>
        </div>
      </div>
    );
  }
}

export default TechStack;
