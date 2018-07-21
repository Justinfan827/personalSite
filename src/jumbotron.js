import React, { Component } from "react";
import Content from "./Content";

class Jumbotron extends Component {
  constructor(props) {
    var divStyle = {
      backgroundImage:
        "url(https://mdbootstrap.com/img/Photos/Others/forest2.jpg)"
    };
    super(props);
    this.state = {
      backGroundStyle: divStyle,
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <div>
        <div class="row mb-5">
          <div class="col-md-12">
            <div class="card card-image" style={this.state.backGroundStyle}>
              <div class="text-white text-center rgba-stylish-strong py-5 px-4">
                <div class="py-0">
                  <h6 class="orange-text font-bold">
                    <i class="fa fa-book" aria-hidden="true" />
                    Student, Developer, Lifelong Learner
                  </h6>
                  <h2 class="card-title pt-3 mb-5 font-bold">Justin Fan</h2>
                  <p class="px-5 pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                    sit officia accusamus minus error nisi architecto nulla
                    ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <div class="row justify-content-center">
                    <div class="col-12">
                      <a
                        onClick={this.toggleHidden.bind(this)}
                        class="btn peach-gradient btn-rounded"
                      >
                        <i class="fa fa-clone left" /> Resume
                      </a>
                    </div>

                    <a class="btn peach-gradient btn-rounded">
                      <i class="fa fa-clone left" /> Summer '18 blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-5 justify-content-center">
          {!this.state.isHidden && <Content />}
        </div>
      </div>
    );
  }
}

export default Jumbotron;
