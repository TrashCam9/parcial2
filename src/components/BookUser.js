import React from 'react';
import '../App.css';
import { Container, Card } from 'react-bootstrap';


function BookUser(props) {

  return (
    <Container>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{ props.book.name }</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">ISBN {props.book.isbn}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Author {props.book.author}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Publisher {props.book.publisher}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Genre {props.book.gender}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Year {props.book.year}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Available Online {props.book.available_online ? <p>Yes</p>:<p>No</p> }</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Price {props.book.price}</Card.Subtitle>
            <Card.Text>
                <p>Summary</p>
                {props.book.summary}
            </Card.Text>
        </Card.Body>
        </Card>
        
    </Container>
  );
}

export default BookUser;