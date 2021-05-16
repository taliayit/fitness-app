import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function WorkoutCompleteModal({show, onClose, level, time}) {
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
                </Modal.Body>

                <Modal.Footer>
                    <Button id="red-btn" onClick={onClose}>Save Workout</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default WorkoutCompleteModal;