import React, { Component } from "react";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = "About";
  }

  render() {
    return (
      <div className="AboutContainer">
        <h1>I am, ROGER MPUMELELO NDABA</h1>
        <div className="Summary slide-in-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          ullamcorper lorem et lacus vulputate ultrices. Ut dapibus commodo
          condimentum. Suspendisse potenti. Etiam condimentum dolor erat, id
          vestibulum nisi rhoncus quis. In vitae nisi scelerisque, venenatis
          tortor id, luctus nisi. Quisque sed congue nunc, non ornare mi. Sed
          vehicula nisl id ex pulvinar aliquet. Aenean accumsan diam ex, ut
          semper lacus tempus at. Donec aliquam mi leo, accumsan efficitur sem
          vehicula eget.
        </div>
        <div className="Info">
          <h2>sdsds</h2>
          <div className="Left">
            <div className="AboutFields">
              <h3>Birth History:</h3>
              Born on the 15<sup>th</sup> of March 1999 in a small town of
              Oshoek in Mpumalanga, South Africa
            </div>
            <div className="AboutFields">
              <h3>Language Proficiency:</h3>
              <table>
                <tbody>
                  <tr>
                    <th>Language</th>
                    <th>Proficiency /10</th>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>Siswati (Home Language)</td>
                    <td>10+</td>
                  </tr>
                  <tr>
                    <td>Zulu</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Xhosa</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Sesotho</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Setswana</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>German</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="Right">
            <div className="AboutFields">
              <h3>Education:</h3>
              <p>
                <strong>NSC</strong>:<br />
                Grade 10-12 at Litjelembube High School. <br />
                Graduated with NCS bachelor certificate
              </p>
              <p>
                <strong>BSc in Computer Engineering</strong>:
                <br />
                University of KwaZulu Natal. <br />
                Left to pursue Software Engineering
              </p>

              <p>
                <strong>MICT SETA NQF Level 5</strong>: <br />
                WeThinkCode_ college. <br />
                Pursuing a certificate in Software Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
