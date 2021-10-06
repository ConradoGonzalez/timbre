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

    const alignProperComment = (id) => {

        const ProperComment = comments.map((comment) => {
            if (
                comment.albumId === id
            ) {
                comment.text = comment.text
            }
            return comment;
        })

        setComments(ProperComment);
        return
    }

    return (
        <div>
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="row album-row">
                    <div className="col">
                        {albums.map((album) => {
                            return (
                                <Card className="card col my-5" key={album.id}>
                                    <CardHeader className="row card-header">
                                        <p className="col-6 text-left">{album.album}</p>
                                        <p className="col text-right">{album.year}</p>
                                        <p className="col-12 text-right">{album.artist}</p>
                                    </CardHeader>
                                    <CardBody className="card-img-container">
                                        <CardImg className="card-img" src={album.image} alt="Album Art" />
                                    </CardBody>
                                    <CardFooter className="row card-footer">
                                        <p className="col text-left card-text">{album.user}  {album.caption}</p>
                                        <Button onClick={() => updateAlbumLike(album.id)}
                                            className="col-1 btn btn-dark album-icon">
                                            <i className={album.favorite ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true"></i>
                                        </Button>
                                        <Button onClick={() => setShow(!show)} className="col-1 btn btn-dark album-icon">
                                            <i className="fa fa-lg fa-angle-down" ></i>
                                        </Button>
                                    </CardFooter>
                                    
                                    {comments.map((comment) => {
                                        //alignProperComment(comment.albumId);

                                        return (
                                            <CardFooter
                                                style={show ? { display: "block" } : { display: 'none' }}
                                                className="row collapse">
                                                <div className="col text-left">
                                                    {comment.user}: {comment.text}
                                                </div>
                                            </CardFooter>
                                        );
                                    }
                                    )}

                                    <CardFooter className="row card-footer">
                                        <Input className="col album-icon" placeholder="Add a comment..." />
                                        <Button className="col-2 btn btn-primary album-icon">Post</Button>
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
