import React, { Component } from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink, Jumbotron,
    Button, ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Input, Label
} from 'reactstrap';
import  Modal  from "react-modal";

export default class NavbarComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader>
                        <div>Log In</div>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Input placeholder="Username"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Password"></Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn btn-info">Login</Button>
                        <Button className="btn btn-secondary">Create Account</Button>
                    </ModalFooter>
                </Modal>


                <Navbar dark color="dark bg-dark" expand="md">
                    <div className="container">
                        <div className="row">
                            <NavbarBrand className="mr-auto navbar-brand text-left">
                                <a className="btn btn-dark">
                                    <i className="fa fa-lg fa-headphones text-info" ></i>
                                    </a>
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

                            <NavbarToggler onClick={this.toggleNav} />

                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem className="d-flex flex-row-reverse">
                                        <NavLink>
                                            <a href="#" className="btn btn-dark"><i className="fa fa-lg fa-home text-info" aria-hidden="true"></i></a>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="d-flex flex-row-reverse">
                                        <NavLink>
                                            <a href="#" className="btn btn-dark"><i className="fa fa-lg fa-heart text-info" aria-hidden="true"></i></a>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="d-flex flex-row-reverse">
                                        <NavLink>
                                            <a href="#" className="btn btn-dark" onClick={this.toggleModal}><i className="fa fa-lg fa-sign-out text-info" aria-hidden="true"></i></a>
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
