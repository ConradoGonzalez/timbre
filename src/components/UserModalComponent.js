import React, { Component } from "react";
import Modal from "react-modal";

export default class UserModalComponent extends Component {
    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <h2>MODAL</h2>
                    <p>MODAL</p>
                </Modal>
            </div>
        )
    }
}
