import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hompageImage from '../../assets/images/homepage_bg.jpg';
import './HomePage.css';

function HomePage(props) {
    return (
        <div className="p-homepage">
            <Container fluid>
                <Row>
                    <Col md={8} className="p-0">
                        <img className="bg-img" src={hompageImage}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;