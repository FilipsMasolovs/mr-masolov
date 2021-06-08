import Header from "./sections/header/header";
import Experience from "./sections/experience/experience";
import Skills from "./sections/skills/skills";
import Portfolio from "./sections/portfolio/portfolio";
import Contacts from "./sections/contacts/contacts";
import Footer from "./sections/footer/footer";

import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitorName: "",
      interactionStarted: sessionStorage.getItem("mrMasolovVisitorName"),
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      visitorName: e.target.value,
    });
  }

  handleEnterPress(e) {
    if (e.key === "Enter") {
      sessionStorage.setItem("mrMasolovVisitorName", this.state.visitorName);
      this.setState({
        interactionStarted: true,
      });
    }
  }

  handleButtonClick() {
    sessionStorage.setItem("mrMasolovVisitorName", this.state.visitorName);
    this.setState({
      interactionStarted: true,
    });
  }

  render() {
    let content = (
      <div className="mr-masolov-greeting">
        <div className="mr-masolov-greeting-inner">
          <h1>Hi there, what's your name?</h1>
          <input
            onChange={this.handleInputChange}
            onKeyPress={this.handleEnterPress}
          ></input>
          <button onClick={this.handleButtonClick}>
            Next <i className="fa fa-arrow-right" />
          </button>
        </div>
        <div className="mr-masolov-greeting--accent1" />
        <div className="mr-masolov-greeting--accent2" />
        <div className="mr-masolov-greeting--accent3" />
      </div>
    );

    if (this.state.interactionStarted) {
      content = (
        <>
          <Header
            visitorName={sessionStorage.getItem("mrMasolovVisitorName")}
          />
          <Experience />
          <Portfolio />
          <Skills />
          <Contacts
            visitorName={sessionStorage.getItem("mrMasolovVisitorName")}
          />
          <Footer />
        </>
      );
    }
    return content;
  }
}
