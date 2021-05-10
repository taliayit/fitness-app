import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import logo_black from '../../assets/images/logo_black.png';
import logo_red from '../../assets/images/logo_red.png';
import MusclesSelector from '../../components/MusclesSelector/MusclesSelector';
import TimePicker from '../../components/TimePicker/TimePicker';
import './CustomizePage.css';

function CustomizePage({activeUser}) {
    const [time, setTime] = useState('00:00');
    const [level, setLevel] = useState(0);

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    return (
        <div className="p-customize">
            <Container>
                <Row><h2 className="bold-text m-auto">Customize Workout</h2></Row>
                <Row>
                    <Col className="left-col">
                        <h4 className="bold-text">Level</h4>
                        <div className="level-img-wrapper">
                            <img className="logo-sm" src={level === 1 ? logo_red : logo_black} onClick={() => setLevel(1)} alt="muscle"/>
                            <img className="logo-md" src={level === 2 ? logo_red : logo_black} onClick={() => setLevel(2)} alt="muscle"/>
                            <img className="logo-lg" src={level === 3 ? logo_red : logo_black} onClick={() => setLevel(3)} alt="muscle"/>
                        </div>

                        <h4 className="bold-text">Time<span className="time-format">(HH : mm)</span></h4>
                        
                        <div className="time-wrapper">
                            <TimePicker/>
                        </div>

                        <h4 className="bold-text">Muscles</h4>
                        <p>Select body areas on the right</p>

                        <Button id="red-btn" className="mt-auto m-0">
                           Lets Start
                        </Button>
                    </Col>
                    <Col className="p-0">
                        <MusclesSelector/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CustomizePage;