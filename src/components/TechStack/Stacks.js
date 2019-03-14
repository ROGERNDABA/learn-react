import React, { Component } from "react";

class Stack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="logos">
        <img className="logo" src={this.props.image} alt={this.props.name} />
        <a href={this.props.link} className="stackName">
          <div className="logoName">
            {this.props.name}
            <i>
              {Array.from(Array(this.props.rate), (e, i) => {
                return (
                  <span
                    key={i}
                    role="img"
                    aria-label="starRating"
                    aria-labelledby="self star rating"
                    style={{ fontStyle: "normal", fontSize: "initial" }}
                  >
                    ⭐
                  </span>
                );
              })}
            </i>
          </div>
        </a>
      </div>
    );
  }
}

class Stacks extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.StackObj = this.props.stack;
  }
  render() {
    return (
      <div style={{ display: "contents" }}>
        <h3>{this.props.heading}</h3>
        {this.StackObj.map((stack, i) => {
          return (
            <Stack
              key={i}
              link={stack[Object.keys(stack)[2]]}
              rate={stack[Object.keys(stack)[0]]}
              name={Object.keys(stack)[1]}
              image={stack[Object.keys(stack)[1]]}
            />
          );
        })}
      </div>
    );
  }
}

export default Stacks;
