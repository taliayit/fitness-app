import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard';
import './WorkoutsPage.css'

function WorkoutsPage({activeUser}) {
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
            <h2 className="bold-text m-auto">My Workouts</h2>
            {workouts ? 
                <Container>                
                    <Row>
                        {workouts.map((workout, index) => 
                            <Col key={index} lg={4} md={6} className="mt-4">
                                <WorkoutCard workout={workout} onDelete={onDelete}/>
                            </Col>
                        )}
                    </Row>
                </Container>
                : <p className="no-data-msg">No saved workouts . . .</p>}

            <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
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