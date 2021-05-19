import React, { useEffect, useMemo } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import medal from '../../assets/images/medal.png';
import './WorkoutCompleteModal.css';

function WorkoutCompleteModal({show, onClose, level, time, onSave, isReplay}) {
    const timeFormatted = useMemo(() => {
        let hours = Math.floor(time/60);
        let fhours = '0' + hours;
        let minutes = time % 60;
        let fminutes = minutes.toString().length === 1 ?  '0' + minutes : minutes;
        return fhours + ":" + fminutes;    
    });

    function saveWorkout() {
        onSave("name");
        onClose();
    }

    return (
        <div>
            <Modal
                id="workout-complete-modal"
                show={show}
                onHide={onClose}
                centered>
                <Modal.Header>
                    <Modal.Title>Workout Complete!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={medal} alt="medal"/>
                    <Row>
                        <Col>
                            <h5>{time}/{time}</h5>
                            <div>Exercises</div>
                        </Col>
                        <Col>
                            <h5>{level}</h5>
                            <div>Level</div>
                        </Col>
                        <Col>
                            <h5>{timeFormatted}</h5>
                            <div>Duration</div>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button id="red-btn" onClick={saveWorkout} disabled={isReplay}>Save Workout</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default WorkoutCompleteModal;