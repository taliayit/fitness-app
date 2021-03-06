import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard';
import fitness_loader from '../../assets/images/fitness_loader.gif';
import './WorkoutsPage.css'

function WorkoutsPage({activeUser, onPlay}) {
    const [workouts, setWorkouts] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [workoutToDelete, setWorkoutToDelete] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const workouts = await activeUser.getMyWorkouts();
            setWorkouts(workouts);
        }
        
        if (activeUser) {
            fetchData();
        }
    }, [activeUser])

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    function onDelete(workoutToDelete) {
        setShowConfirm(true);
        setWorkoutToDelete(workoutToDelete)
    }

    function deleteWorkout() {
        if(workoutToDelete) {
            console.log(workoutToDelete)
            workoutToDelete.deleteWorkout();
            let array = [...workouts]; 
            var index = array.indexOf(workoutToDelete)
            if (index !== -1) {
                array.splice(index, 1);
                setWorkouts(array);
            }
            setShowConfirm(false);
        }
    }

    return (
        <div className="p-workouts">
            <h2 className="bold-text my-3">My Workouts</h2>
            {workouts ? 
                <Container>                
                    <Row>
                        {workouts.map((workout, index) => 
                            <Col key={index} lg={4} md={6} className="my-3">
                                <WorkoutCard workout={workout} onDelete={onDelete} onPlay={onPlay}/>
                            </Col>
                        )}
                    </Row>
                </Container>
                : <div className="loader-wrapper">
                    <img src={fitness_loader} alt=""/>
                    <p className="bold-text">Pumping. . .</p>
                </div>}

            {(workouts && workouts.length===0) && 
                <p className="no-data-msg">No saved workouts . . .</p>}
            
            <Modal id="confirm-modal" show={showConfirm} onHide={() => setShowConfirm(false)}>
                <Modal.Title>Delete workout</Modal.Title>
                <Modal.Body>Are you sure?</Modal.Body>
                <Modal.Footer className="justify-content-between border-0">
                    <Button id="white-btn" onClick={() => setShowConfirm(false)}>Cancel</Button>
                    <Button id="red-btn" onClick={deleteWorkout}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default WorkoutsPage;