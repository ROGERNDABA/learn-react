import React, { Component } from "react";
import "./Home.css";
import myProfile from "./roger2.png";
import Typewriter from "../plugins/Typewriter";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Quote: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer congue metus ut lacus posuere, etpharetra ex pellentesque.Sed volutpat neque neque,at finibus felis condimentum blandit.Phasellus venenatis neque ac leo porttitor gravida.Nullam aliquet mattis diam dignissi venenatis." - Rxcxc`,
            TypewriterQuote: ""
        };

        this.Typewriter = this.Typewriter.bind(this);
    }

    Typewriter(index, text, textLen) {
        if (index < textLen) {
            setTimeout(() => {
                this.setState(state => ({
                    TypewriterQuote: state.TypewriterQuote + text.charAt(index)
                }));
                this.Typewriter(index, text, textLen);
            }, 70);
            index++;
        }
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
                            text='"Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.Integer congue metus ut lacus posuere, et
                                    pharetra ex pellentesque.Sed volutpat neque neque,
                                    at finibus felis condimentum blandit.Phasellus
                                    venenatis neque ac leo porttitor gravida.Nullam
                                    aliquet mattis diam dignissi venenatis." -    Rxcxc'
                            speed="20"
                        />
                    </em>
                </div>
            </div>
        );
    }
}

export default Home;
