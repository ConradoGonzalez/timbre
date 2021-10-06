import React, { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardImg } from 'reactstrap';
import { ALBUMS } from '../shared/albums';

export default function CardComponent() {

    const [albums, setAlbums] = useState(ALBUMS)

    const updateAlbumLike = (id) => {

        const updatedAlbums = albums.map((album) => {
            if (
                album.id === id
            ) {
                album.favorite = !album.favorite
            }
            return album;
        })

        setAlbums(updatedAlbums)
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
                                        <p className="col text-left card-text">{album.user}</p>
                                        <button onClick={() => updateAlbumLike(album.id)} 
                                        className="col-1 btn btn-dark album-icon"><i 
                                        className={album.favorite ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true"></i></button>
                                        <a href="#" className="col-1 btn btn-dark album-icon"><i className="fa fa-comments-o" ></i></a>
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
        </div>
    )
}
