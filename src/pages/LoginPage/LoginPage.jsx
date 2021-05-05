import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import loginImage from '../../assets/images/login_bg.jpg';
import './LoginPage.css';

function LoginPage({isSignup}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
    }
  
    function login(event) {
      event.preventDefault();
    }  

    return (
        <div className="p-loginpage">
            <Container fluid>
                <Row>
                    <Col md={7} className="p-0">
                        <img className="bg-img" src={loginImage}/>
                    </Col>
                    <Col md={5} className="text-left p-5">
                        <div className="login-content">
                            <h2 className="bold-text">Sign in</h2>
                            <Form onSubmit={login}>
                                <Form.Group size="lg" controlId="email">
                                <Form.Control
                                    type="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                </Form.Group>
                                <Form.Group size="lg" controlId="password">
                                <Form.Control
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </Form.Group>
                                <Form.Group controlId="rememberMeCheckbox">
                                <Form.Check type="checkbox" label="Keep me signed in" />
                                </Form.Group>

                                <Button id="red-btn" block type="submit">
                                Sign in
                                </Button>
                            </Form>

                            <p>Don't have an account? <a className="red-text" href="">Sign up</a></p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoginPage;