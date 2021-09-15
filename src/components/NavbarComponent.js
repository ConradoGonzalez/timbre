import React, { Component } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Form, Label, Input, Button, FormGroup } from 'reactstrap'

export default class NavbarComponent extends Component {

    render() {
        return (
            <div>
                <Navbar fixed="sticky" color="dark bg-dark">
                    <NavbarBrand className="navbar-brand">
                        <i className="fa fa-lg fa-headphones" aria-hidden="true"></i>
                    </NavbarBrand>
                    <NavbarToggler className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <Collapse>
                        </Collapse>
                    </NavbarToggler>
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
                            <Button type="submit"><i className="fa fa-lg fa-search" aria-hidden="true"></i></Button>
                        </FormGroup>
                    </Form>
                </Navbar>
            </div>
        )
    }
}
