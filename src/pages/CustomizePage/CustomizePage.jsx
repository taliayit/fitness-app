import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo_black from '../../assets/images/logo_black.png';
import logo_red from '../../assets/images/logo_red.png';
import MusclesSelector from '../../components/MusclesSelector/MusclesSelector';
import TimePicker from '../../components/TimePicker/TimePicker';
import { useMediaQuery } from 'react-responsive'
import './CustomizePage.css';

function CustomizePage({activeUser, onSubmit}) {
    const [level, setLevel] = useState(0);
    const [time, setTime] = useState(0);
    const [muscles, setMuscles] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const smallDevice = useMediaQuery({ maxWidth: 768 })

    useEffect(() => {
        setIsValid(level !== "0" && time > 0 && muscles.length > 0);
    }, [level, time, muscles])

    function handleInvalidSubmit(e) {
        e.preventDefault();
        setErrorMessage("Please select all preferences.")
    }

    return (
        <div className="p-customize">
            <Container>
                <h2 className="bold-text my-3">Customize Workout</h2>
                <Row>
                    <Col className="left-col" md={5}>
                        <h4 className="bold-text">Level</h4>
                        <div className="level-wrapper">
                            <img className="logo-sm" src={level === 1 ? logo_red : logo_black} onClick={() => setLevel(1)} alt="muscle"/>
                            <img className="logo-md" src={level === 2 ? logo_red : logo_black} onClick={() => setLevel(2)} alt="muscle"/>
                            <img className="logo-lg" src={level === 3 ? logo_red : logo_black} onClick={() => setLevel(3)} alt="muscle"/>
                        </div>

                        
                        <div className="time-wrapper">
                            <h4 className="bold-text">Time<span className="time-format">(HH : mm)</span></h4>
                            <TimePicker onTimePicked={setTime}/>
                        </div>

                        <h4 className="bold-text">Muscles</h4>
                        <div className="muscles-wrapper">
                            <p>Select body areas</p>
                        </div>
                        
                        {smallDevice && 
                            <div className="muscle-selector-wrapper">
                                <MusclesSelector onMusclesSelected={setMuscles}/>
                            </div>}
                        
                        <div className="error-wrapper" style={{visibility:errorMessage==="" ? "hidden":"visible"}}>
                            <span className="error-icon">!</span>
                            <p className="error-msg"> {errorMessage} </p>
                        </div>

                        <Link 
                            to="/plan"
                            id="red-btn"
                            onClick={isValid ? 
                                () => onSubmit({level: level, time: time, muscles: muscles})
                                : e => handleInvalidSubmit(e)}>
                            Let's Start
                        </Link>
                    </Col>

                    {!smallDevice && 
                        <Col className="p-0" md={7}>
                            <MusclesSelector onMusclesSelected={setMuscles}/>
                        </Col>}
                </Row>

            </Container>
        </div>
    );
}

export default CustomizePage;