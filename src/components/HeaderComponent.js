import React, { Component } from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center align-self-center">
                                <i class="fa fa-5x fa-headphones" aria-hidden="true"></i>
                                <h1>TIMBRE</h1>
                                <h2>(<strong>tam</strong>·br)</h2>
                                <h3>Connect with fellow music lovers all over the world!</h3>
                                <a href="#" data-toggle="modal" data-target="#newPostModal"><i class="fa fa-5x fa-play-circle" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" data-html="true" title="Create New Post!"></i></a>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}