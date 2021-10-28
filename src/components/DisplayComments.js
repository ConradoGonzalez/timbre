import React, { useState } from 'react'
import { CardFooter, Button, Input } from 'reactstrap';
import Form from 'reactstrap/lib/Form';
import { COMMENTS } from '../shared/comments';

export default function DisplayComments({ albumid, selectedAlbums }) {
    const [comments, setComments] = useState(COMMENTS)
    const [input, setInput] = useState('')

    const alignProperComment = () => {
        const ProperComment = comments.filter((comment) => {
            return comment.albumId === albumid
        })
        return ProperComment
    }

    const addComment = (event) => {
        console.log(event)
        event.preventDefault();
        setComments([...comments,
        {
            id: comments.length + 2,
            albumId: albumid,
            text: input,
            user: "Visitor",
            date: new Date()
        }])
        setInput('');
    }

    console.log(comments)

    return (
        <>
            {alignProperComment().map((comment) => {
                let showComments = false;
                if (selectedAlbums.includes(albumid)) {
                    showComments = true;
                }
                return (
                    <CardFooter
                        style={showComments ? { display: "block" } : { display: 'none' }}
                        className="row collapse">
                        <p className="col text-left">
                            <strong>{comment.user}</strong> {comment.text}
                        </p>
                    </CardFooter>
                );
            }
            )}
           
                <Form className="row card-footer" onSubmit={event => addComment(event)}>
                    <Input
                        onChange={event => setInput(event.target.value)}
                        className="col album-icon"
                        placeholder="Add a comment..."
                        type="text"
                        value={input}
                    />
                    <Button
                        className="col-2 btn btn-info album-icon"
                        type="submit"
                    >Post</Button>
                </Form>

          
        </>
    )
}