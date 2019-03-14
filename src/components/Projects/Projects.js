import React, { Component } from "react";
import "./Projects.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  toggleAccordion = () => {
    this.setState(state => ({ active: !state.active }));
  };

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <button
          className={"ProjectsAccordion " + (this.state.active ? "ActiveAccordion" : "")}
          onClick={this.toggleAccordion}
        >
          <h3 style={{ margin: 0 }}>
            {this.props.ProjectName}
            <span style={{ float: "right", fontWeight: "bold" }}>{!this.state.active ? "+" : "-"}</span>
          </h3>
        </button>
        <div className={"AccordionPanel " + (this.state.active ? "Stretched" : "")}>
          <p dangerouslySetInnerHTML={{ __html: this.props.ProjectDesc }} />
          <span style={{ display: "block", margin: "15px" }}>
            Project Repo:{" "}
            <a
              href={this.props.ProjectLink}
              target={this.props.ProjectLink !== "#" ? "_blank" : null}
              rel="noopener noreferrer"
            >
              {this.props.ProjectName}
            </a>
          </span>
        </div>
      </div>
    );
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="projectsContainer">
        <h1>Projects</h1>
        <span style={{ color: "rgba(255, 255, 255, 0.753)", padding: "10px" }}>
          *These are some the projects I've done and proud of, with their corresponding Github links. All C projects
          have full memory management taken into account, meaning zero memory leaks *
        </span>
        <Project
          ProjectName="Libft"
          ProjectLink="https://github.com/ROGERNDABA/libft2"
          ProjectDesc="
        A school project developed in C. The purpose of this project was designing
        you own C library with all the other C functions from other C libraries. This
        allows you to learn a lot of fundamentals in C and how some these functions work as well as
        creating a much smaller compact usable C library."
        />
        <Project
          ProjectName="Minishell"
          ProjectLink="https://github.com/ROGERNDABA/minishell"
          ProjectDesc="
          Another C school Project. The aim of this project was to design a basic interactive
          terminal. It had to be built up from your <strong>Libft</strong>. It had to read/write
          basic on I/O, open and close files and interpret basic commands"
        />
        <Project
          ProjectName="GetNextLine"
          ProjectLink="#"
          ProjectDesc="
          Written as get_next_line.<br />
          Also A C school project. It is similar to <strong>fgets</strong> from the
          <strong>stdio.h</strong>. library It also has added functionality to read from
          multiple file descriptors."
        />
        <Project
          ProjectName="Filler"
          ProjectLink="https://github.com/ROGERNDABA/filler"
          ProjectDesc="
          Another C school Project. It's a basically like a two player tetris where players are given 
          specifically shaped pieces and they fight over territory."
        />
        <Project
          ProjectName="Camagru"
          ProjectLink="https://github.com/ROGERNDABA/camargu"
          ProjectDesc="
          A PHP Web project. It is like instagram where a  person can take pictures,
          edit them and save them. Other users can Also like and comment on your pictures.
          It uses <strong>mysql</strong> as it's database."
        />
        <Project
          ProjectName="Hypertube"
          ProjectLink="https://github.com/ROGERNDABA/hypertube"
          ProjectDesc="
          A group school project. MVC web application. It's a movie streaming website.
          It's aim was understanding and using the bittorent protocol with seeding and peer-to-peer
          handshakes. It should also allow users to login with their social accounts You can check out the live version at
          <a href='http://justyouand.me'>www.justyouand.me</a>."
        />
        <Project
          ProjectName="Docker (In progress)"
          ProjectLink="https://github.com/ROGERNDABA/docker-1"
          ProjectDesc="
          Also school project. Just working with docker. Read more about it at
          <a href='https://en.wikipedia.org/wiki/Docker_(software)'>https://en.wikipedia.org/wiki/Docker_(software)</a>"
        />
        <Project
          ProjectName="Electron Appp"
          ProjectLink="https://github.com/ROGERNDABA/electron-practice"
          ProjectDesc="
          This is a personal projct. Electron is used for making desktop apps using Javascript. Apps like Twitch
          for desktop Are made in electron. I'm am still just learning this framework.
         "
        />
        <Project
          ProjectName="Roger's Resume"
          ProjectLink="https://github.com/ROGERNDABA/learn-react"
          ProjectDesc="
          This is a personal projct. It's actually the website you are using right now.
          It's made with the ReactJS framework. It;s a  one page  application with the goal of a fast 
          website without ever redirecting and also works offline for low-data users.
         "
        />
        <Project
          ProjectName="Other Projects"
          ProjectLink="https://github.com/ROGERNDABA?tab=repositories"
          ProjectDesc="
          Just other projects I don't feel like explaining.
         "
        />
      </div>
    );
  }
}

export default Projects;
