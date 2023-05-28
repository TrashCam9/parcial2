import React from 'react';
import '../App.css';
import { Container, Card, Form, InputGroup } from 'react-bootstrap';


function BookAdmin(props) {

  return (
    <Container>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{ props.book.name }</Card.Title>
            <InputGroup className="mb-3">
                <Form.Text className="text-muted">ISBN</Form.Text>
                <Form.Control
                    placeholder={props.book.isbn}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Text className="text-muted">Author</Form.Text>
                <Form.Control
                    placeholder={props.book.author}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Text className="text-muted">Publisher</Form.Text>
                <Form.Control
                    placeholder={props.book.publisher}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Text className="text-muted">Genre</Form.Text>
                <Form.Control
                    placeholder={props.book.gender}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Text className="text-muted">Year</Form.Text>
                <Form.Control
                    placeholder={props.book.year}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Text className="text-muted">Available Online</Form.Text>
                <Form.Control
                    placeholder={props.book.available_online ? "Yes": "No"}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Text className="text-muted">Price</Form.Text>
                <Form.Control
                    placeholder={props.book.price}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Text className="text-muted">Summary</Form.Text>
                <Form.Control
                as="textarea"
                    placeholder={props.book.summary}
                />
            </InputGroup>
            
        </Card.Body>
        </Card>
        
    </Container>
  );
}

export default BookAdmin;