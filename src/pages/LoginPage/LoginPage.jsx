import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import loginImage from '../../assets/images/login_bg.jpg';
import UserModel from '../../model/User/UserModel';
import './LoginPage.css';

function LoginPage({activeUser, onLogin}) {
    const [signupMode, setSignupMode] = useState(false);
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=>{
        // unlock body scroller in case of hidden overflow
        document.body.style.overflow = "auto";
    }, []);

    if (activeUser) {
        return <Redirect to="/customize"/>
    }

    function validateForm() {
        if(email === '') {
            setErrorMessage('Email cannot be empty.');
            return false;
        }
        else if(password1 === '') {
            setErrorMessage('Password cannot be empty.');
            return false;
        }
        if(signupMode) {
            if(password2 === '') {
                setErrorMessage('Password cannot be empty.');
                return false;
            }    
            else if(password1 !== password2) {
                setErrorMessage('Passwords do not match.');
                return false;
            }    
        }
        return true;
    }

    async function signup(e) {
        e.preventDefault();

        if(validateForm()) {
            try {
                const activeUser = await UserModel.signup(email, password1);
                onLogin(activeUser);
            } catch (error) {
                console.error('Error while signing up user', error);
                setErrorMessage(error.message)
            }
        }
    }

    async function login(e) {
        e.preventDefault();
        
        if(validateForm()) {
            try {
                const activeUser = await UserModel.login(email, password1);
                onLogin(activeUser);
            } catch (error) {
                console.error('Error while logging in user', error);
                setErrorMessage(error.message)
            }
        }
    }  

    function clearForm() {
        setEmail("");
        setPassword1("");
        setPassword2("");
        setErrorMessage("");
    }

    function changeLoginMode() {
        clearForm();
        setSignupMode(!signupMode);
    }

    return (
        <div className="p-loginpage">
            <Container fluid>
                <Row>
                    <Col md={7} className="p-0">
                        <img className="bg-img" src={loginImage} alt="workout"/>
                    </Col>
                    <Col md={5} className="text-left p-5">
                        <div className="login-content">
                            <h2 className="bold-text">Sign {signupMode ? "up" : "in"}</h2>
                            <Form onSubmit={signupMode ? signup : login}>
                                <Form.Group size="lg" controlId="email">
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group size="lg" controlId="password1">
                                    <Form.Control
                                        type="password"
                                        value={password1}
                                        placeholder="Password"
                                        onChange={(e) => setPassword1(e.target.value)}
                                    />
                                </Form.Group>

                                {signupMode ? <Form.Group size="lg" controlId="password2">
                                    <Form.Control
                                        type="password"
                                        value={password2}
                                        placeholder="Confirm Password"
                                        onChange={(e) => setPassword2(e.target.value)}
                                    />
                                </Form.Group> :null}

                                {errorMessage && (<div className="error-wrapper"><span className="error-icon">!</span><p className="error-msg"> {errorMessage} </p></div>)}

                                {!signupMode ? <Form.Group controlId="rememberMeCheckbox">
                                    <Form.Check type="checkbox" label="Keep me signed in"/>
                                </Form.Group> : null}

                                <Button id="red-btn" block type="submit">
                                Sign {signupMode ? "up" : "in"}
                                </Button>
                            </Form>
                            
                            <div className="seperator"></div>

                            <p>{signupMode ? "Already" : "Don't"} have an account?
                                <span className="red-link" onClick={changeLoginMode}> Sign {signupMode ? 'in' : 'up'}</span>
                            </p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoginPage;