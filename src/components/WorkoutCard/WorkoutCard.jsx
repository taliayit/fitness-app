import React from 'react';
import { Card, Button } from 'react-bootstrap';
import logo from '../../assets/images/logo_black.png';
import delete_icon from '../../assets/images/delete_icon.png';
import './WorkoutCard.css';

function WorkoutCard({workout}) {
    return (
        <div className="c-workout-card">
            <Card>
                <Card.Body>
                    <Card.Title className="red-text">{workout.name}</Card.Title>
                    <Card.Text>Level: {workout.level}</Card.Text>
                    <Card.Text>Time: {workout.time}</Card.Text>
                    <Card.Text>Muscles: {workout.muscles}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="delete-btn">
                        <img src={delete_icon} alt="bin"/>
                    </div>
                    <div className="start-btn">
                        <img src={logo} alt="hand muscle"/>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default WorkoutCard;