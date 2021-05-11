import React, { useState } from 'react';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import { FaPlay, FaPause } from 'react-icons/fa';
import './PlayerPage.css';

function PlayerPage({level, exercises}) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [curruntIndex, setCurruntIndex] = useState(0);

    level = 2; //for debugging
    exercises = [{name:"Crunches", image:"https://wger.de/media/exercise-images/91/Crunches-1.png"},
                {name:"Benchpress Dumbbells", image:"https://wger.de/media/exercise-images/97/Dumbbell-bench-press-2.png"}] //for debugging

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
            
            <div className="exercise-image-wrapper">
                <img src={exercises[curruntIndex].image} alt={exercises[curruntIndex].name}/>
            </div>

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