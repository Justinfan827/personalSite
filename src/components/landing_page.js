import React, { Component } from 'react';
import headshot from "../resources/Headshot_small.png";

export default class LandingPage extends Component {
    render() {
        return (
            <div id="intro" class="view">
                <div class="mask rgba-black-strong">
                    <div id="wrapper">
                        <div class="imgContainer">
                            <img
                                id="imgHeader"
                                src={headshot}
                                class="imgHeadshot fixed-img rounded-circle"
                                alt="placeholder"
                            />
                        </div>
                        <div class="container-fluid wrap d-flex align-items-center justify-content-center">
                            <div class="row max-width d-flex justify-content-center text-center">
                                <div class="col-md-10">
                                    <h2 class="display-4 font-weight-bold white-text pt-1 mb-2">Justin Fan </h2>
                                    <hr class="hr-light" />
                                    <h3 class="white-text my-4">Student, Developer, Friend</h3>
                                    <button type="button" class="btn btn-outline-white">
                                        Resume<i class="fa fa-book ml-2" />
                                    </button>
                                    <button type="button" class="btn btn-outline-white">
                                        Summer '18 blog<i class="fab fa-book ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

