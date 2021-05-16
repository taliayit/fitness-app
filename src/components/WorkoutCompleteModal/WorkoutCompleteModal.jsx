import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import medal from '../../assets/images/medal.png';
import './WorkoutCompleteModal.css';

function WorkoutCompleteModal({show, onClose, level, time}) {
    let timeFormatted = "0" + Math.floor(time/60) + ":" + 90 % 60;

    return (
        <div className="c-workout-complete-modal">
            <Modal
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
                    <Button id="red-btn" onClick={onClose}>Save Workout</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default WorkoutCompleteModal;