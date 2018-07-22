import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import './Navbar.css'
import Jumbotron from "./jumbotron";
import Content from "./Content";
import headshot from './Headshot_small.png'

class App extends Component {
  render() {
    return (
      <div class="max-height">
        <NavBar />
        <div id="intro" class="view">
          <div class="mask rgba-black-strong">
            <div class="container">
              <img src={headshot} class="fixed-img rounded-circle" alt=""></img>
            </div>
            <div class="container-fluid wrap d-flex align-items-center justify-content-center h-100">
              <div class="row d-flex justify-content-center text-center">
                <div class="col-md-10">
                  <h2 class="display-4 font-weight-bold white-text pt-5 mb-2">Justin Fan</h2>
                  <hr class="hr-light"></hr>
                  <h3 class="white-text my-4">Student, Developer, Friend</h3>
                  <button type="button" class="btn btn-outline-white">Resume<i class="fa fa-book ml-2"></i></button>
                  <button type="button" class="btn btn-outline-white">Summer '18 blog<i class="fa fa-book ml-2"></i></button>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Jumbotron /> */}
      </div >
    );
  }
}

export default App;
