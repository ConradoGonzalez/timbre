import React, { Component } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, } from 'reactstrap'

export default class NavbarComponent extends Component {

    render() {
        return (
            <div>
                <Navbar color="dark bg-dark">
                    <NavbarBrand className="navbar-brand" href="login.html">
                        <i className="fa fa-lg fa-headphones" aria-hidden="true"></i>
                    </NavbarBrand>
                    <NavbarToggler/>
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
                </Navbar>
            </div>
        )
    }
}
