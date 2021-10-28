import React, { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardImg, Button, Input, Form } from 'reactstrap';
import { ALBUMS } from '../shared/albums';
import DisplayComments from './DisplayComments';



export default function CardComponent() {

    const [albums, setAlbums] = useState(ALBUMS)
    const [selectedAlbums, setSelectedAlbums] = useState([]);

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

    const updateSelectedAlbums = id => {
        if (selectedAlbums.includes(id)) {
            setSelectedAlbums(selectedAlbums.filter(albumId => albumId !== id));
        } else {
            setSelectedAlbums([...selectedAlbums, id]);
        }
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
                                            <i className={album.favorite ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true" />
                                        </Button>
                                        <Button onClick={() => updateSelectedAlbums(album.id)}
                                            className="col-1 btn btn-dark album-icon">
                                            <i className="fa fa-lg fa-caret-down" />
                                        </Button>
                                    </CardFooter>
                                    <DisplayComments albumid={album.id} selectedAlbums={selectedAlbums} />
                                </Card>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
