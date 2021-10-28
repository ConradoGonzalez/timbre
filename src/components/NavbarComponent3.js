import React, { useState } from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink,
    Button, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input, Row
} from 'reactstrap';
import Modal from 'react-modal'

export default function Navbar3Component({ loggedUser }) {

    const [isOpen, setIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);

    const handleLogin = () => {
        setModalIsOpen(false)
        loggedUser('Conradg');
    }
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
                    <Button className="btn btn-info"
                        onClick={() => handleLogin()}
                    >Login</Button>
                    <Button className="btn btn-secondary" onClick={() => setModalIsOpen(false)}>Create Account</Button>
                </ModalFooter>
            </Modal>
            <Navbar dark color="dark bg-dark" expand="md">
                <div className="container">
                    <Row >
                        <NavbarBrand href="" className="col-md-4">
                            <i className="fa fa-lg fa-headphones text-info" ></i>
                        </NavbarBrand>
                    </Row>
                    <Row>
                        <Form inline className="row">
                            <FormGroup className="col-md-4 p-0 m-0">
                                <Input type="select" name="select" id="exampleSelect" >
                                    <option>User</option>
                                    <option>Album</option>
                                    <option>Genre</option>
                                    <option>Year</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className="col-md-8 p-0 m-0">
                                <Input type="navrefine" name="navrefine" id="navrefine" placeholder="&#xF002; Search" className="fontAwesome" />
                            </FormGroup>
                        </Form>
                    </Row>
                    <Row >
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="col-md-4" navbar>
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
                                <span >
                                    <NavLink onClick={() => setModalIsOpen(true)}>
                                        <i className="fa fa-lg fa-sign-out text-info" aria-hidden="true" />
                                    </NavLink>
                                </span>
                            </Nav>
                        </Collapse>
                    </Row>
                </div>
            </Navbar>
        </React.Fragment>
    )
}
