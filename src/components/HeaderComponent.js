import React, { useState } from 'react'
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label,
} from 'reactstrap';
import Modal from 'react-modal';

const HeaderComponent = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    // const handlePost = (event) => {
    //     alert(`Artist: ${event.artist.value}`);
    //     setModalIsOpen(true);
    //     event.preventDefault();
    // }

    return <React.Fragment>
        <Jumbotron fluid>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <i class="fa fa-5x fa-headphones" aria-hidden="true"></i>
                        <h1>TIMBRE</h1>
                        <h2>(<strong>tam</strong>·br)</h2>
                        <h3>Connect with fellow music lovers all over the world!</h3>
                       
                            <i
                                onClick={() => setModalIsOpen(true)}
                                className="fa fa-5x fa-play-circle text-info" aria-hidden="true"
                                data-toggle="tooltip" data-placement="bottom" data-html="true" title="Create New Post!">

                            </i>
                       
                    </div>
                </div>
            </div>
        </Jumbotron>

        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className="container">
                <ModalHeader className="col-12">
                    <div>Create New Post</div>
                </ModalHeader >
                <ModalBody className="col-md-10">
                    <Form /*onSubmit={handlePost}*/>
                        <FormGroup className="row">
                            <Label htmlFor="artist" className="col-md-2 ">Artist</Label>
                            <div className="col-md-10">
                                <Input type="text" id="artist" name="artist" placeholder="Artist"
                                    /*innerRef={input => artist = input}*/ />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="albumTitle" className="col-md-2 ">Album Title</Label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" id="albumTitle" name="albumTitle" placeholder="Album Title" />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="year" className="col-md-2 ">Year</Label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" id="year" name="year" placeholder="Year" />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label for="genre" className="col-md-2 ">Genre</Label>
                            <div className="col-md-10">
                                <select className="form-control" id="genre" name="genre" placeholder="Genre">
                                    <option>Rock</option>
                                    <option>Alternative</option>
                                    <option>Jazz</option>
                                    <option>Hip Hop</option>
                                    <option>Classical</option>
                                    <option>Funk</option>
                                    <option>Electronic</option>
                                    <option>Folk</option>
                                </select>
                            </div>
                        </FormGroup>

                        <FormGroup className="row">
                            <label for="albumArt" className="col-md-2 ">Album Art</label>
                            <div className="col-md-10">
                                <input type="file" className="form-control-file" id="albumArt" />
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <label for="caption" className="col-md-2 ">Caption</label>
                            <div className="col-md-10">
                                <textarea className="form-control" id="caption" name="caption" rows="2" placeholder="Caption"></textarea>
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <div className="offset-md-2 col-md-10">
                                <button onClick={() => setModalIsOpen(false)}
                                    type="submit" className="btn btn-info">Post!</button>
                            </div>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </div>
        </Modal>
    </React.Fragment>;
}

export default HeaderComponent;