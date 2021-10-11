import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "react-modal";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default function UserModalComponent() {

    return (
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
    );
}