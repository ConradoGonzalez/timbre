import React, { Component } from 'react'
import { Collapse, Navbar, Nav, NavbarBrand, NavbarToggler, Form, Label, Input, Button, FormGroup, NavItem, NavLink } from 'reactstrap'

export default class NavbarComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark  color="dark bg-dark" expand="md">
                    <div className="container">
                        <div className="row">
                        <NavbarBrand className="mr-auto navbar-brand col text-left">
                            <i className="fa fa-lg fa-headphones text-primary" ></i>
                        </NavbarBrand>

                        <Form className="d-flex">
                            <FormGroup
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <FormGroup>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>User</option>
                                    <option>Album</option>
                                    <option>Genre</option>
                                    <option>Year</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="navrefine" name="navrefine" id="navrefine" placeholder="Search" />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit"><i className="fa fa-lg fa-search fa-fw" aria-hidden="true"></i></Button>
                            </FormGroup>
                        </Form>

                        <NavbarToggler onClick={this.toggleNav}/>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem className="d-flex flex-row-reverse">
                                    <NavLink>
                                    <a href="#" className="btn btn-dark"><i className="fa fa-lg fa-home text-primary" aria-hidden="true"></i></a>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="d-flex flex-row-reverse">
                                    <NavLink>
                                    <a href="#" className="btn btn-dark"><i className="fa fa-lg fa-heart text-primary" aria-hidden="true"></i></a>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="d-flex flex-row-reverse">
                                    <NavLink>
                                    <a href="#" className="btn btn-dark"><i className="fa fa-lg fa-sign-out text-primary" aria-hidden="true"></i></a>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        </div>
                    </div>
                </Navbar>
            </div>
        )
    }
}
