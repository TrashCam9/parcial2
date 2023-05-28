import React from 'react';
import '../App.css';
import { CardGroup, Col, Container, Row, Card } from 'react-bootstrap';
import Book from './Book';
import { useLocation, useSearchParams } from 'react-router-dom';
import BookAdmin from './BookAdmin';
import BookUser from './BookUser';
const { useEffect, useState } = require("react");


function Books() {
    const location = useLocation();
    console.log(location)
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState(undefined);
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        const URL = "http://localhost:3000/books";
        fetch(URL,{
        }).then(data => data.json()).then(data =>{
            setBooks(data);
        })
    })
    const bookDetail = () => {
        if (location.state.rol === "Administrador"){
            return display ? <BookAdmin book={book} key={book.id}/>: null
        }else{
            return display ? <BookUser book={book} key={book.id}/>: null
        }
        
    }

    const handleClick = (id) =>{
        const URL = `http://localhost:3000/books/${id}`;
        fetch(URL).then(data => data.json()).then(data => {
            setBook(data);
            setDisplay(true);
        })
    }

  return (
    <Container>
        <Row>
            <Col sm={8}>
                <Row xs={2} md={3} >
                    {books.map(book => <Card onClick={()=>handleClick(book.id)}><Book book = {book} key={book.id} /></Card> )}
                    
                </Row>
            </Col>
            <Col sm={4}>
                {bookDetail()}
            </Col>
        </Row>
        
    </Container>
  );
}

export default Books;
