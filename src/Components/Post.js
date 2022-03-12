import React from 'react'
import {useParams, Link} from "react-router-dom"
import { Card } from "react-bootstrap";

const Post = ({messages}) => {
    const {id} = useParams()
    const thisPost = messages && messages.find((post) => post._id === id);
   
    return (
                <Card className="post">
                    <Card.Body>{thisPost.message} <br/>
                    <Link to="/" >Back to Mainpage</Link>
                    </Card.Body>
                </Card>
    )
}

export default Post

