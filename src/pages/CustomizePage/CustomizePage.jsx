import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import logo_black from '../../assets/images/logo_black.png';
import logo_red from '../../assets/images/logo_red.png';
import MusclesSelector from '../../components/MusclesSelector/MusclesSelector';
import TimePicker from '../../components/TimePicker/TimePicker';
import './CustomizePage.css';

function CustomizePage({activeUser, onSubmit}) {
    const [level, setLevel] = useState(0);
    const [time, setTime] = useState(0);
    const [muscles, setMuscles] = useState([]);
    const [isValidToSubmit, setIsValidToSubmit] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsValidToSubmit(level !== "0" && time > 0 && muscles.length > 0);
    }, [level, time, muscles])

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    function handleInvalidSubmit(e) {
        e.preventDefault();
        setErrorMessage("Please select all preferences.")
    }

    return (
        <div className="p-customize">
            <Container>
                <Row><h2 className="bold-text m-auto">Customize Workout</h2></Row>
                <Row>
                    <Col className="left-col" md={5}>
                        <h4 className="bold-text">Level</h4>
                        <div className="level-wrapper">
                            <img className="logo-sm" src={level === 1 ? logo_red : logo_black} onClick={() => setLevel(1)} alt="muscle"/>
                            <img className="logo-md" src={level === 2 ? logo_red : logo_black} onClick={() => setLevel(2)} alt="muscle"/>
                            <img className="logo-lg" src={level === 3 ? logo_red : logo_black} onClick={() => setLevel(3)} alt="muscle"/>
                        </div>

                        <h4 className="bold-text">Time<span className="time-format">(HH : mm)</span></h4>
                        
                        <div className="time-wrapper">
                            <TimePicker onTimePicked={setTime}/>
                        </div>

                        <h4 className="bold-text">Muscles</h4>
                        <div className="muscles-wrapper">
                            <p>Select body areas on the right</p>
                        </div>
                        
                        {errorMessage && (<div className="error-wrapper"><span className="error-icon">!</span><p className="error-msg"> {errorMessage} </p></div>)}

                        {isValidToSubmit ? <Link 
                            to="/plan"
                            id="red-btn"
                            onClick={() => onSubmit({level: level, time: time, muscles: muscles})}>
                            Let's Start
                        </Link>
                        : <Link 
                            id="red-btn"
                            onClick={e => handleInvalidSubmit(e)}>
                            Let's Start
                        </Link>}

                    </Col>
                    <Col className="p-0" md={7}>
                        <MusclesSelector onMusclesSelected={setMuscles}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CustomizePage;