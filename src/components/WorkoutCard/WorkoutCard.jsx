import React from 'react';
import { Card } from 'react-bootstrap';
import logo from '../../assets/images/logo_black.png';
import delete_icon from '../../assets/images/delete_icon.png';
import './WorkoutCard.css';
import { Link } from 'react-router-dom';
import utils from '../../helpers/utils';

function WorkoutCard({workout, onDelete, onPlay}) {
    let categories = [];
    const time = utils.getFormatTime(workout.time);
    const level = utils.getLevelString(workout.level);

    for(let e of workout.exercises) {
        if(!categories.includes(e.category))
            categories.push(e.category)
    }

    return (
        <div className="c-workout-card">
            <Card>
                <Card.Body>
                    <Card.Title className="red-text">{workout.name}</Card.Title>
                    <div className="level-text-wrapper">
                        <Card.Text>Level: </Card.Text>
                        <Card.Text>{level}</Card.Text>
                    </div>
                    <div className="time-text-wrapper">
                        <Card.Text>Time:</Card.Text>
                        <Card.Text>{time}</Card.Text>
                    </div>
                    <div className="areas-text-wrapper">
                        <Card.Text>Areas:</Card.Text>
                        <Card.Text>{categories.join(', ')}</Card.Text>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className="delete-btn" onClick={()=>onDelete(workout)}>
                        <img src={delete_icon} alt="bin"/>
                    </div>
                    <div className="play-btn">
                        <Link 
                            to="/player"
                            onClick={() => onPlay({level: workout.level, exercises: workout.exercises, isReplay: true})}>
                            <img src={logo} alt="hand muscle"/>
                        </Link>
                        
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default WorkoutCard;