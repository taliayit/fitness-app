import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hompageImage from '../../assets/images/homepage_bg.jpg';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage(props) {
    return (
        <div className="p-homepage">
            <Container fluid>
                <Row>
                    <Col md={7} className="p-0">
                        <img className="bg-img" src={hompageImage} alt="workout"/>
                    </Col>
                    <Col md={5} className="text-left p-5">
                        <h1 className="bold-text">FIT ME<span className="red-text">.</span></h1>
                        <h3>Workouts Customization</h3>
                        <p className="app-desc">Select your personal training preferences, start workout and save your favorite workouts.</p>
                        <Link to="/customize" id="red-btn">Let's Do Fit</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;