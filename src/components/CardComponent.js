import React, { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardImg, Button, Input } from 'reactstrap';
import { ALBUMS } from '../shared/albums';
import { COMMENTS } from '../shared/comments';

export default function CardComponent() {

    const [albums, setAlbums] = useState(ALBUMS)
    const [comments, setComments] = useState(COMMENTS)
    const [show, setShow] = useState(false);

    const updateAlbumLike = (id) => {

        const updatedAlbums = albums.map((album) => {
            if (
                album.id === id
            ) {
                album.favorite = !album.favorite
            }
            return album;
        })

        setAlbums(updatedAlbums);
        return
    }

    const alignProperComment = (albumid) => {

        const ProperComment = comments.filter((comment) => comment.albumId === albumid)

        return ProperComment
    }

    return (
        <div>
            <div className="container">
                <div className="row album-row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="col-sm-8">
                        {albums.map((album) => {
                            return (
                                <Card className="card col my-5" key={album.id}>
                                    <CardHeader className="row card-header bg-dark text-light">
                                        <p className="col-6 text-left album-title">{album.album}</p>
                                        <p className="col text-right">{album.year}</p>
                                        <p className="col-12 text-right">{album.artist}</p>
                                    </CardHeader>
                                    <CardBody className="card-img-container">
                                        <CardImg src={album.image} alt="Album Art" />
                                    </CardBody>
                                    <CardFooter className="row card-footer">
                                        <p className="col text-left card-text"><strong>{album.user}</strong>  {album.caption}</p>
                                        <Button onClick={() => updateAlbumLike(album.id)}
                                            className="col-1 btn btn-dark album-icon">
                                            <i className={album.favorite ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true"></i>
                                        </Button>
                                        <Button onClick={() => setShow(!show)}
                                                
                                        className="col-1 btn btn-dark album-icon">
                                            <i className="fa fa-lg fa-angle-down" ></i>
                                        </Button>
                                    </CardFooter>

                                    {alignProperComment(album.id).map((comment) => {


                                        return (
                                            <CardFooter
                                                style={show ? { display: "block" } : { display: 'none' }}
                                                className="row collapse">
                                                <p className="col text-left">
                                                    <strong>{comment.user}</strong> {comment.text}
                                                </p>
                                            </CardFooter>
                                        );
                                    }
                                    )}

                                    <CardFooter className="row card-footer">
                                        <Input className="col album-icon" placeholder="Add a comment..." />
                                        <Button className="col-2 btn btn-info album-icon">Post</Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
