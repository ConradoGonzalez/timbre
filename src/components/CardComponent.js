import React, { Component } from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardImg } from 'reactstrap';

export default class CardComponent extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row album-row">
                        <div className="col d-flex justify-content-center">
                            <Card className="card">
                                <CardHeader className="row card-header">
                                    <p className="col-6 text-left">A Love Supreme</p>
                                    <p className="col text-right">1964</p>
                                    <p className="col-12">John Coltrane</p>
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
            </>
        )
    }
}
