import React, {useState} from 'react';
import '../App.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const URL = 'http://localhost:3000/'
    const navigate = useNavigate(); 
    const [rol, setRol] = useState("");
    const handleInputChange = (e) =>{
        const {id, value} = e.target;
        if (id === "email"){
            setEmail(value);
        }else if (id === "password"){
            setPassword(value);  
        }
    }

    const goHome = (role) => {
        navigate("/home", {state:{
            rol: role
        }})
    }

    const login = () => {
        if (email.length === 0){
            alert("Please enter your email");
        }else if (password.length === 0){
            alert("Please enter your password");
        }else if(!email.match(emailExp)){
            alert("Please enter a valid email")
        }else if(password.length < 6){
            alert("Password must be at least 6 characters long")
        }else{
            let obj = {
                "email":email,
                "password":password
            }
            fetch(URL + 'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)  
            })
            .then(res => res.json())
            .then(data =>{
               goHome(data.rol)
            })
            .catch(err => {
                console.log(err)
             })
            
        }
    }
    return (
        <Container id="loginContainer">
            <Row>
                <Col>
                    <Row>
                        <img id = "book-img" src="https://freesvg.org/img/1488216538.png" alt=""/>
                        <p>Encuentra hasta el libro que no estabas buscando</p>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h1>Tu Libreria Aliada</h1>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>User name or Email</Form.Label>
                                <Form.Control id="email" type="email" onChange = {(e) => handleInputChange(e)} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="password" type="password" onChange = {(e) => handleInputChange(e)} placeholder="Password" />
                                <Form.Text className="text-muted">
                                    Forgot password?
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" onClick={()=>login() }>
                                Sign In
                            </Button>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
    }

export default Login;
