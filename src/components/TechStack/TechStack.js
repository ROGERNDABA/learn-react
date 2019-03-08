import React, { Component } from "react";
import "./TechStack.css";
import {
    JSIMG,
    NodejsIMG,
    CIMG,
    CppIMG,
    PythonIMG,
    JavaIMG,
    TSIMG,
    JqueryIMG,
    BasicsIMG,
    FlaskIMG,
    PHPIMG,
    BoostrapIMG,
    AngularIMG,
    ReactIMG,
    CFIMG,
    SQLitelIMG,
    SQLIMG,
    MysqlIMG,
    MongoIMG,
    Ionic,
    Electron
} from "../../MediaExports";

class TechStack extends Component {
    state = {};
    render() {
        return (
            <div className="TechStackContainer">
                <div className="Heading">Technology Stack</div>

                <div className="TechStackLogos">
                    <div className="container">
                        {/* ///////////// FUnDAMENTALS ///////// */}
                        <h3>Fundamental Programming</h3>
                        <div className="logos">
                            <img src={CIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">C</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={CppIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">CPlusPlus</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={PythonIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Python</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={JavaIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>

                        {/* ///////////// Web: Frontend ///////// */}
                        <h3>Web Development: Front End and Basics</h3>
                        <div className="logos">
                            <img src={BasicsIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={JSIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={TSIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={JqueryIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={BoostrapIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>

                        {/* ///////////// Web Backend ///////// */}
                        <h3>
                            Web Development: Back End, Frameworks and Libraries
                        </h3>
                        <div className="logos">
                            <img src={NodejsIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={FlaskIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={PHPIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={AngularIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={ReactIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={Electron} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={CFIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>

                        {/* ///////////// Databases ///////// */}
                        <h3>Databases</h3>
                        <div className="logos">
                            <img src={SQLIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={MysqlIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img
                                src={SQLitelIMG}
                                style={{ width: "70%" }}
                                alt=""
                            />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={MongoIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>

                        {/* ///////////// Mobile DEv ///////// */}
                        <h3>Mobile Development</h3>
                        <div className="logos">
                            <img src={Ionic} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                        <div className="logos">
                            <img src={ReactIMG} alt="" />
                            <a href="/" className="stackName">
                                <h1 className="logoName">Java</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TechStack;
