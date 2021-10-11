import React, { useState } from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink, Jumbotron,
    Button, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input, Label
} from 'reactstrap';

export default function Navbar2Component() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar dark color="dark bg-dark" expand="md">
            <div className="container">
                <NavbarBrand href="">
                    <i className="fa fa-lg fa-headphones text-info" ></i>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="ml-auto" navbar>

                        <NavItem>
                            <Form inline>
                                <FormGroup>
                                    <Input type="select" name="select" id="exampleSelect" className="mr-1">
                                        <option>User</option>
                                        <option>Album</option>
                                        <option>Genre</option>
                                        <option>Year</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="navrefine" name="navrefine" id="navrefine" placeholder="Search" className="mr-1" />
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit"><i className="fa fa-lg fa-search fa-fw" aria-hidden="true"></i></Button>
                                </FormGroup>
                            </Form>
                        </NavItem>
                        <NavItem>
                            <NavLink href="" className="nav-link">
                                <i className="fa fa-lg fa-home text-info" aria-hidden="true" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="" className="nav-link">
                                <i className="fa fa-lg fa-heart text-info" aria-hidden="true" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="" className="nav-link">
                                <i className="fa fa-lg fa-sign-out text-info" aria-hidden="true" />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>

    )
}
