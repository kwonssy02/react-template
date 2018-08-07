import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/common.css';

import {
  Row,
  Col,
  Button,
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


import Home from './views/Home.js';
import Menu1 from './views/Menu1.js';
import Menu2 from './views/Menu2.js';

class App extends Component {
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
      <Router>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">React-Template</NavbarBrand>
            
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {/* <Nav className="ml-auto" navbar> */}
              <Nav navbar>
                <NavItem>
                  <NavLink tag={Link} to="/menu_1">Menu_1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/menu_2">Menu_2</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>

          <Row>
            <Col sm="12" md={{ size: 10, offset: 1 }} className="content">
              <Route exact path="/" component={Home} />
              <Route path="/menu_1" component={Menu1} />
              <Route path="/menu_2" component={Menu2} />
            </Col>
          </Row>

          {/* Footer */}
          <Row>
            <Col sm="12" md={{ size: 10, offset: 1 }} align="right">
              <div className="footer small">
                <ul class="list-inline">
                  <li class="list-inline-item">Footer</li>
                  <li class="list-inline-item">Text</li>
                  <li class="list-inline-item">Here</li>
                </ul>
              </div>
            </Col>
          </Row>

        </div>
      </Router>
    );
  }
}

export default App;
