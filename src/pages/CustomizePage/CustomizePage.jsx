import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import logo from '../../assets/images/logo_black.png';
import './CustomizePage.css';

function CustomizePage({activeUser}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    return (
        <div className="p-customize">
            <Container>
                <Row><h2 className="bold-text m-auto">Customize Workout</h2></Row>
                <Row>
                    <Col className="p-5 text-left">
                        <h4>Level</h4>
                        <div className="level-img-wrapper">
                            <img className="logo-sm" src={logo} alt=""/>
                            <img className="logo-md" src={logo} alt=""/>
                            <img className="logo-lg" src={logo} alt=""/>
                        </div>

                        <h4>Time</h4>
                        {/* insert time picker here */}

                        <h4>Muscles</h4>
                        <p>Select body areas on the right</p>

                        <Button id="red-btn">
                           Lets Start
                        </Button>
                    </Col>
                    <Col className="p-5">
                        {/* insert muscle selector here */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CustomizePage;