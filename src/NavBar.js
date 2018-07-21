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

class NavBar extends Component {
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
        <Navbar color="transparent" light expand="md" scrolling>
          <div className="container-fluid">
            {!this.state.isWideEnough && (
              <NavbarToggler onClick={this.onClick} />
            )}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem active>
                  <NavLink to="#">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#">Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle nav caret>
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="#">Action</DropdownItem>
                      <DropdownItem href="#">Another Action</DropdownItem>
                      <DropdownItem href="#">Something else here</DropdownItem>
                      <DropdownItem href="#">Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <form className="form-inline md-form mt-0">
                    <input
                      className="form-control mr-sm-2 mb-0 text-white"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </div>
        </Navbar>
      </Router>
    );
  }
}

export default NavBar;
