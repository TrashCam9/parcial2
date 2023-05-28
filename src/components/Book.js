import React from 'react';
import { Card } from 'react-bootstrap';

function Book(props){
    return(
        <div>
            <Card.Img variant = "top" src = {props.book.image}/>
            <Card.Body>
                <Card.Title>{props.book.name}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{props.book.isbn}</small>
            </Card.Footer>
        </div>
        
    );
}

export default Book;