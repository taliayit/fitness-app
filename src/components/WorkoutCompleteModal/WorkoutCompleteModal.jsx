import React, { useEffect, useState, useMemo } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import medal from '../../assets/images/medal.png';
import './WorkoutCompleteModal.css';
import { AiOutlineCheck } from 'react-icons/ai'
import utils from '../../helpers/utils';

function WorkoutCompleteModal({show, onClose, level, time, onSave, isReplay}) {
    const [showNameInput, setShowNameInput] = useState(false)
    const [name, setName] = useState("")
    const timeFormatted = useMemo(() => utils.getFormatTime(time));

    function saveWorkout() {
        if(name != "") {
            onSave(name);
            onClose();
        }
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
                        <Col className="text-wrapper">
                            <h5>{time}/{time}</h5>
                            <div>Exercises</div>
                        </Col>
                        <Col className="text-wrapper">
                            <h5>{level}</h5>
                            <div>Level</div>
                        </Col>
                        <Col className="text-wrapper">
                            <h5>{timeFormatted}</h5>
                            <div>Duration</div>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button id="red-btn" onClick={() => setShowNameInput(true)} disabled={isReplay} block>Save Workout</Button>
                </Modal.Footer>
                
                {showNameInput && (<div className="name-input">
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter workout name..."/>
                    <Button id="white-btn" onClick={saveWorkout}><AiOutlineCheck/></Button>
                </div>)}

            </Modal>

        </div>
    );
}

export default WorkoutCompleteModal;