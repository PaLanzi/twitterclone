import React from 'react'
import {useParams, Link} from "react-router-dom"
import { Card } from "react-bootstrap";

const Post = ({messages}) => {
    const {id} = useParams()
    //const thisMessage = messages && messages.find((message) => message._id === id);
   
    return (
        <ul>
        {messages.map(message => 
            <li key={message._id}><img className='profile_pic' src={message.userID.avatar} alt="" />  <span className="user_name">{message.userID.username}</span>: {message.message}</li>
        )}
       </ul>
        
    )
}

export default Post

{/* <Card className="post">
<Card.Body>{thisMessage.messages} <br/>
<Link to="/" >Back to Mainpage</Link>
</Card.Body>
</Card> */}

//{users.map(user => <li key={user._id}>{user.username}</li>)