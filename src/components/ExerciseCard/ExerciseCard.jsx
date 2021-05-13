import React from 'react';
import { Card } from 'react-bootstrap';
import './ExerciseCard.css';

function ExerciseCard({exercise}) {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={exercise.image}/>
                <Card.Body>
                    <Card.Title>{exercise.name}</Card.Title>
                </Card.Body>
            </Card>
        </>
    );
}

export default ExerciseCard;