import React from 'react';
import { Card } from 'react-bootstrap';
import logo from '../../assets/images/logo_black.png';
import delete_icon from '../../assets/images/delete_icon.png';
import './WorkoutCard.css';
import { Link } from 'react-router-dom';

function WorkoutCard({workout, onDelete, onPlay}) {
    let categories = [];
    for(let e of workout.exercises) {
        if(!categories.includes(e.category))
            categories.push(e.category)
    }
    
    function getFormatTime(time) {
        let hours = Math.floor(time/60);
        let fhours = '0' + hours;
        let minutes = time % 60;
        let fminutes = minutes.toString().length === 1 ?  '0' + minutes : minutes;
        return fhours + ":" + fminutes;    
    }

    function getLevelString(level) {
        switch(level) {
            case 1: return "Beginner";
            case 2: return "Intermediate";
            case 3: return "Advanced";
        }
    }

    return (
        <div className="c-workout-card">
            <Card>
                <Card.Body>
                    <Card.Title className="red-text">{workout.name}</Card.Title>
                    <div className="level-text-wrapper">
                        <Card.Text>Level: </Card.Text>
                        <Card.Text>{getLevelString(workout.level)}</Card.Text>
                    </div>
                    <div className="time-text-wrapper">
                        <Card.Text>Time:</Card.Text>
                        <Card.Text>{getFormatTime(workout.time)}</Card.Text>
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
                    <div className="start-btn">
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