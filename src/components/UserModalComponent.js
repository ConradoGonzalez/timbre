import React, { useState, Component } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "react-modal";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class UserModalComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        return (
            <Modal>
                <ModalHeader>
                    <h2>Log In</h2>
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
                    <Button className="btn btn-black">Login</Button>
                    <Button className="btn btn-secondary">Create Account</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
