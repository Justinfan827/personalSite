import React, { Component } from "react";

import "./App.css";
import NavBar from "./NavBar";
import Jumbotron from "./jumbotron";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
