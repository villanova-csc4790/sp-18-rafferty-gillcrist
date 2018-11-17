import React, {Component} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Join Our Team</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Contact Us/">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Privacy/">Privacy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Terms/">Terms</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Facebook/">Facebook</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Twitter/">Twitter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Instagram/">Instagram</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}