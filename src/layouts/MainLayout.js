import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";

import {
    Row,
    Col,
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

import MainRoute from '../routes/MainRoute';

class MainLayout extends Component {

    constructor(props) {
        super(props);
    
        // this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/main">React-Template</NavbarBrand>
                    
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    {/* <Nav className="ml-auto" navbar> */}
                    <Nav navbar>
                        <NavItem>
                        <NavLink tag={Link} to="/main/menu1">Menu_1</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink tag={Link} to="/main/menu2">Menu_2</NavLink>
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
                        <Switch>
                            {MainRoute.map((route, key) => {
                                let exactProp = {};

                                if(route.exact) {
                                    exactProp["exact"] = true;
                                }

                                return (
                                    <Route 
                                        key={key}
                                        {...exactProp}
                                        path={route.path} 
                                        component={route.component}
                                    />
                                )
                            })}
                        </Switch>
                    </Col>
                </Row>

                {/* Footer */}
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }} align="right">
                    <div className="footer small">
                        <ul className="list-inline">
                        <li className="list-inline-item">Footer</li>
                        <li className="list-inline-item">Text</li>
                        <li className="list-inline-item">Here</li>
                        </ul>
                    </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default MainLayout;