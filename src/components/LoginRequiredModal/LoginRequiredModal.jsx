import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginRequiredModal.css';

function LoginRequiredModal({show, onClose}) {

    return (
        <div>
            <Modal
                id="login-required-modal"
                show={show}
                onHide={onClose}>
                <Modal.Body>
                    <h5>Ooops!</h5>
                    <div>You do not have an access to view this content.</div>
                    <div>Please sign in.</div>
                </Modal.Body>
                <Modal.Footer className="justify-content-between border-0">
                    <Button id="white-btn" onClick={onClose}>No, Thanks</Button>
                    <Link to="/login" id="red-btn">Sign in</Link>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default LoginRequiredModal;