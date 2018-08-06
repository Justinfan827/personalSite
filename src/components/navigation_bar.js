import React, { Component } from "react";
import {
  Navbar,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Router>
        <Navbar color="transparent" dark expand scrolling fixed="top">
          <div className="container-fluid">
            <NavbarNav left>
              <NavItem>
                <NavLink to="#">
                  <div>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">
                  <div>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                  </div></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">
                  <div>
                    <FontAwesomeIcon icon={['fas', 'envelope']} />
                  </div></NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
            </NavbarNav>
          </div>
        </Navbar>
      </Router>
    );
  }
}

