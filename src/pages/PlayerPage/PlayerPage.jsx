import React, { useState } from 'react';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import { FaPlay, FaPause } from 'react-icons/fa';
import './PlayerPage.css';

function PlayerPage({level, exercises}) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [curruntIndex, setCurruntIndex] = useState(0);

    level = 2; //for debugging
    exercises = [{name:"Crunches"}, {name:"Plank"}] //for debugging

    function handleExerciseComplete() {
        console.log(curruntIndex)
        if(curruntIndex + 1 < exercises.length) {
            setCurruntIndex(curruntIndex + 1);
            
        }
        else {
            setIsPlaying(false);
            //show workout complete modal
        }
    }

    return (
        <div className="p-player-page">
            <div className="player-dashboard">
                <div className="player-info">
                    <h3 className="bold-text">{exercises[curruntIndex].name}</h3>
                    <span className="bold-text">Next: </span>
                    <span>{(curruntIndex + 1 < exercises.length) ? exercises[curruntIndex+1].name : 'Workout Complete!'}</span>
                    <div className="player-buttons">
                        <FaPlay onClick={() => setIsPlaying(true)}/>
                        <FaPause onClick={() => setIsPlaying(false)}/>
                    </div>
                </div>
                <div className="timer-wrapper">
                    <CountDownTimer isPlaying={isPlaying} level={level} onExerciseComplete={handleExerciseComplete}></CountDownTimer>
                </div>

            </div>
        </div>
    );
}

export default PlayerPage;