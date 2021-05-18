import React from 'react';
import { Card, Button } from 'react-bootstrap';
import logo from '../../assets/images/logo_black.png';
import delete_icon from '../../assets/images/delete_icon.png';
import './WorkoutCard.css';

function WorkoutCard({workout}) {
    let categories = [];
    
    for(let e of workout.exercises) {
        if(!categories.includes(e.category))
            categories.push(e.category)
    }

    return (
        <div className="c-workout-card">
            <Card>
                <Card.Body>
                    <Card.Title className="red-text">{workout.name}</Card.Title>
                    <div className="text-wrapper">
                        <Card.Text>Level: </Card.Text>
                        <Card.Text>{workout.level}</Card.Text>
                    </div>
                    <div className="text-wrapper">
                        <Card.Text>Time:</Card.Text>
                        <Card.Text>{workout.time}</Card.Text>
                    </div>
                    <div className="text-wrapper">
                        <Card.Text>Areas:</Card.Text>
                        <Card.Text>{categories.join(', ')}</Card.Text>
                    </div>
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