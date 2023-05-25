import React from 'react';
import '../App.css';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import Book from './Book';
const { useEffect, useState } = require("react");

function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const URL = "http://localhost:3000/books";
        fetch(URL,{
        }).then(data => data.json()).then(data =>{
            setBooks(data);
        })
    })
  return (
    <Container>
        <Row>
            <Col>
                <CardGroup>
                    {books.map(book => <Book book = {book} key={book.id}/>)}
                </CardGroup>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
  );
}

export default Books;
