import React, { Component } from 'react';
import headshot from '../resources/Headshot_small.png';
import { NavLink } from 'react-router-dom'
import { Button } from 'mdbreact'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
export default class LandingPage extends Component {
    render() {
        return (
            <div class="d-flex justify-content-center align-items-center h-100" id="wrapper">
                <div class="d-flex flex-column justify-content-center align-items-center imgContainer">
                    <img
                        id="imgHeader"
                        src={headshot}
                        class="imgHeadshot fixed-img rounded-circle"
                        alt="placeholder"
                    />
                    <div class="row max-width d-flex justify-content-center text-center">
                        <div class="col-md-10">
                            <h2 class="display-4 font-weight-bold white-text pt-1 mb-2">Justin Fan </h2>
                            <hr class="hr-light" />
                            <h3 class="white-text my-4">Student, Developer, Friend</h3>
                            <Button outline color="white">
                                <FontAwesomeIcon className="mr-2" icon='book-open' /> Resume
                            </Button>
                            <NavLink to='/blog'>
                                <Button outline color="white">
                                    <FontAwesomeIcon className="mr-2" icon='comment' /> Blogs
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

