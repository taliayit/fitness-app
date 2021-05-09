import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import logo from '../../assets/images/logo_black.png';
import MusclesSelector from '../../components/MusclesSelector/MusclesSelector';
import TimePicker from '../../components/TimePicker/TimePicker';
import './CustomizePage.css';

function CustomizePage({activeUser}) {
    const [time, setTime] = useState('00:00');

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    return (
        <div className="p-customize">
            <Container>
                <Row><h2 className="bold-text m-auto">Customize Workout</h2></Row>
                <Row>
                    <Col className="left-col">
                        <h4>Level</h4>
                        <div className="level-img-wrapper">
                            <img className="logo-sm" src={logo} alt="muscle"/>
                            <img className="logo-md" src={logo} alt="muscle"/>
                            <img className="logo-lg" src={logo} alt="muscle"/>
                        </div>

                        <h4>Time<span className="time-format">(HH : mm)</span></h4>
                        
                        <div className="time-wrapper">
                            <TimePicker/>
                        </div>

                        <h4>Muscles</h4>
                        <p>Select body areas on the right</p>

                        <Button id="red-btn" className="mt-auto m-0">
                           Lets Start
                        </Button>
                    </Col>
                    <Col>
                        {/* <MusclesSelector/> */}
                        {/* insert muscle selector here */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CustomizePage;