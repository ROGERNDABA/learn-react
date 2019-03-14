import React, { Component } from "react";
import "./Typewriter.css";

class Typewriter extends Component {
  static defaultProps = {
    text: "",
    speed: 50
  };

  constructor(props) {
    super(props);
    this.state = {
      typedText: ""
    };
    this.TypewriterFunction = this.TypewriterFunction.bind(this);
  }

  componentDidMount() {
    var index = -1;
    var { text, speed } = this.props;
    text = text.replace(/\s+/g, " ");
    speed = Number(speed);
    this.TypewriterFunction(index, text, speed);
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  TypewriterFunction(index, text, speed) {
    if (index < text.length) {
      setTimeout(() => {
        this.setState(state => ({
          typedText: state.typedText + text.charAt(index)
        }));
        this.TypewriterFunction(index, text, speed);
      }, speed);
      index++;
    }
  }
  render() {
    return <p> {this.state.typedText}</p>;
  }
}

export default Typewriter;
