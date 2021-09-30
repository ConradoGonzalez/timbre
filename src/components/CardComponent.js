import React, { Component } from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardImg } from 'reactstrap';
import { ALBUMS } from '../shared/albums';


export default class CardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: ALBUMS,
        };

    }


    render() {
        return (
            <div className="container">
                <div className="row album-row">
                    <div className="col justify-content-center">
                        {ALBUMS.map((album, idx) => {
                            return (
                                <Card className="card col my-5">
                                    <CardHeader className="row card-header">
                                        <p className="col-6 text-left">{album.album}</p>
                                        <p className="col text-right">{album.year}</p>
                                        <p className="col-12 text-right">{album.artist}</p>
                                    </CardHeader>
                                    <CardBody className="card-img-container">
                                        <CardImg className="card-img" src={album.image} alt="Album Art" />
                                    </CardBody>
                                    <CardFooter className="row card-footer">
                                        <p className="col text-left card-text">{album.user}</p>
                                        <a href="#" className="col-1 btn btn-dark album-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                        <a href="#" className="col-1 btn btn-dark album-icon"><i className="fa fa-comments-o" aria-hidden="true"></i></a>
                                    </CardFooter>
                                    <CardFooter className="row card-footer">
                                        <p className="col text-left card-text">{album.caption}</p>
                                    </CardFooter>
                                </Card>
                            )
                        })}

                    </div>
                </div>
            </div>
        )
    }
}