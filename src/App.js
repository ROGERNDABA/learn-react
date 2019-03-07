import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import TechStack from "./components/TechStack/TechStack";
import MenuIcon from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            winWidth: window.innerWidth
        };
    }

    componentDidMount() {
        var self = this;
        window.addEventListener("resize", function() {
            self.setState(state => ({
                active: state.winWidth > 700 ? false : state.active
            }));
        });
        console.log(this.state);
    }

    toggleActiveNavBar = () => {
        this.setState(state => ({ active: !state.active }));
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <nav className="navbar">
                        <span
                            className="navbar-toggle"
                            id="js-navbar-toggle"
                            onClick={this.toggleActiveNavBar}
                        >
                            <i>
                                <img src={MenuIcon} alt="" height="20" />
                            </i>
                        </span>
                        <Link className="logo" to={"#"}>
                            Roger's Resume
                        </Link>
                        <ul
                            className={
                                "main-nav " +
                                (this.state.active ? "active" : "")
                            }
                            id="js-menu"
                        >
                            <li>
                                <Link
                                    className="nav-links active"
                                    to={"/"}
                                    onClick={this.toggleActiveNavBar}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-links active"
                                    to={"/about"}
                                    onClick={this.toggleActiveNavBar}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-links active"
                                    to={"/"}
                                    onClick={this.toggleActiveNavBar}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-links active"
                                    to={"/"}
                                    onClick={this.toggleActiveNavBar}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-links active"
                                    to={"/"}
                                    onClick={this.toggleActiveNavBar}
                                >
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="BodyContainer">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/tech-stack" component={TechStack} />
                            <Route path="*" component={Home} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
