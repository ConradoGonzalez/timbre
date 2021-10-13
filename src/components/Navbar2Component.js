import React, { useState } from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink,
    Button, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input
} from 'reactstrap';
import Modal from 'react-modal'

export default function Navbar2Component() {

    const [isOpen, setIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
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
                    <Button className="btn btn-info" onClick={() => setModalIsOpen(false)}>Login</Button>
                    <Button className="btn btn-secondary" onClick={() => setModalIsOpen(false)}>Create Account</Button>
                </ModalFooter>
            </Modal>

            <Navbar dark color="dark bg-dark" expand="md">
                <div className="container">
                    <NavbarBrand href="">
                        <i className="fa fa-lg fa-headphones text-info" ></i>
                    </NavbarBrand>
                    
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>

                        <Nav className="ml-auto" navbar>
                            
                            <NavItem className="searchbar">
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
                                        <Input type="navrefine" name="navrefine" id="navrefine" placeholder="&#xF002; Search" className="fontAwesome mr-1" />
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
                          
                            {/* <NavItem>
                                <NavLink href="" className="nav-link">
                                    <i onClick={() => setModalIsOpen(true)} className="fa fa-lg fa-sign-out text-info" aria-hidden="true" />
                                </NavLink>
                            </NavItem> */}
                            <span >
                                <NavLink onClick={() => setModalIsOpen(true)}>
                                <i className="fa fa-lg fa-sign-out text-info" aria-hidden="true" />
                                </NavLink>
                            </span>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>

    )
}
