import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard';
import './WorkoutsPage.css'

function WorkoutsPage({activeUser}) {
    const [workouts, setWorkouts] = useState(null);
    // let workouts = [{name: "My_workout_#1", level: "2", time: "00:30", muscles: ["1","2"]}];

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
    
    return (
        <div className="p-workouts">
            <h2 className="bold-text m-auto">My Workouts</h2>
            {workouts ? 
                <Container>                
                    <Row>
                        {workouts.map((workout, index) => 
                            <Col key={index} lg={4} md={6} className="mt-4">
                                <WorkoutCard workout={workout}/>
                            </Col>
                        )}
                    </Row>
                </Container>
                : <p className="no-data-msg">No saved workouts . . .</p>}
        </div>
    );
}

export default WorkoutsPage;