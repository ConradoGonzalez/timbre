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
                    <div className="col d-flex justify-content-center">
                        <Card className="card">
                            <CardHeader className="row card-header">
                                <p className="col-6 text-left">{this.state.albums.album}</p>
                                <p className="col text-right">{this.state.albums.year}</p>
                                <p className="col-12">{this.state.albums.artist}</p>
                            </CardHeader>
                            <CardBody className="card-body">
                                <CardImg className="card-img" src="img/71LQ34+Jj+L._SL1061_.jpg" width="100" alt="Album Art" />
                            </CardBody>
                            <CardFooter className="row card-footer">
                                <p className="col card-text">conradg</p>
                                <a href="#" className="col-1 btn btn-dark album-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                <a href="#" className="col-1 btn btn-dark album-icon"><i className="fa fa-comments-o" aria-hidden="true"></i></a>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

/*function RenderAlbumArt({ ALBUMS }) {
    return (
        <div>
            <Card>
                <CardImg top src={ALBUMS.image} alt={ALBUMS.album} />
            </Card>
        </div>
    );
}*/