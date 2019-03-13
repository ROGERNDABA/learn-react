import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="Footer">
        <div className="FooterLeft">
          <h3>Postal Address</h3>
          <a
            href="https://www.google.com/maps/place/Tourvest+Destination+Management+-+TDM/@-26.103278,28.048192,15z/data=!4m5!3m4!1s0x0:0x531c58a4a98197c!8m2!3d-26.103278!4d28.048192"
            alt="Tourvest DM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roger Ndaba IT
            <br />
            Tourvest Desination Management <br />
            Norwich's Place <br />
            Sandton Close, Sandton
            <br />
            Johannesburg South Africa
          </a>
        </div>
        <div className="FooterMiddle">
          <h3>Contact Information</h3>
          <strong>Mobile Number: </strong>+27 72 329 6467
          <br />
          <strong>Email: </strong>
          <a href="mailto:rogerndaba@gmail.com">rogerndaba@gmail.com</a>
        </div>
        <div className="FooterRight">
          <h3>Social</h3>
          <ul>
            <li>
              <img src="/github.png" width="15" height="15" alt="github" />
              &nbsp;
              <a href="https://github.com/rogerndaba/" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <img src="/linkedin.png" width="15" height="15" alt="linkedin" />
              &nbsp;
              <a href="https://www.linkedin.com/in/roger-ndaba-794399136/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <img src="/twitter.png" width="15" height="15" alt="twitter" />
              &nbsp;
              <a href="https://twitter.com/sassy_rog" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            padding: "20px",
            color: "#fff",
            fontSize: "12px",
            fontWeight: "400px"
          }}
        >
          Copyright © 2019 Roger Ndaba
        </div>
      </div>
    );
  }
}

export default Footer;
