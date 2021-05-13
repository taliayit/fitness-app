import React from 'react';
import { Card } from 'react-bootstrap';
import './ExerciseCard.css';

function ExerciseCard({exercise, blured}) {
    return (
        <div className="c-exercise-card">
            <Card className = {blured ? "blured": ""}>
                <Card.Img variant="top" src={exercise.image}/>
                <Card.Body>
                    <Card.Title>{exercise.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ExerciseCard;