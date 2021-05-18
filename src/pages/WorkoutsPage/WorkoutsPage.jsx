import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WorkoutsPage.css'

function WorkoutsPage(props) {
    const [workouts, setWorkouts] = useState(null);
    
    return (
        <div className="p-workouts">
            <h2 className="bold-text m-auto">My Workouts</h2>
            {workouts ? 
                <Container>                
                    <Row>
                        {workouts.map((workout, index) => 
                            <Col key={index} lg={4} md={6} className="mt-4">
                                {/* <WorkoutCard workout={workout}/> */}
                            </Col>
                        )}
                    </Row>
                </Container>
                : <p className="no-data-msg">No saved workouts . . .</p>}
        </div>
    );
}

export default WorkoutsPage;