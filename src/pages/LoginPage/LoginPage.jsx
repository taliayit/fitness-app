import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login_bg.jpg';
import './LoginPage.css';

function LoginPage(props) {
    return (
        <div className="p-loginpage">
            <Container fluid>
                <Row>
                    <Col md={7} className="p-0">
                        <img className="bg-img" src={loginImage}/>
                    </Col>
                    <Col md={5} className="text-left p-5">
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoginPage;