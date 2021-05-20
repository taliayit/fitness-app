import React, { useEffect, useState } from 'react';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import { FaPlay, FaPause, FaForward } from 'react-icons/fa';
import rest_animation from '../../assets/images/rest_animation.gif';
import './PlayerPage.css';
import { Redirect } from 'react-router-dom';
import WorkoutCompleteModal from '../../components/WorkoutCompleteModal/WorkoutCompleteModal';

function PlayerPage({activeUser, planData}) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [curruntIndex, setCurruntIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [next, setNext] = useState(false);

    useEffect(() => {
        if (planData) {
            setCurrentImage(planData.exercises[0].image);
        }
    }, []);
    
    if (!planData) {
        return <Redirect to="/"/>
    }

    function handleExerciseComplete(isRestTime, isNext) {
        if(curruntIndex + 1 < planData.exercises.length) {
            setCurruntIndex(curruntIndex + 1);
            if(isRestTime || isNext)
                setCurrentImage(planData.exercises[curruntIndex+1].image);
            else
                setCurrentImage(rest_animation);
        }
        else {
            setIsPlaying(false);
            setShowModal(true);
        }
    }
    
    function handleForward() {
        setNext(true);
    }

    async function saveWorkout(name) {
        const newWorkout = await activeUser.addWorkout(name, planData.level, planData.exercises.length, planData.exercises);
    
    }

    return (
        <div className="p-player-page">
            
            <div className="exercise-image-wrapper">
                <img src={currentImage} alt="workout"/>
            </div>

            <div className="player-dashboard">
                <div className="player-info">
                    <h3 className="bold-text">{planData.exercises[curruntIndex].name}</h3>
                    <span className="bold-text">Next: </span>
                    <span>{(curruntIndex + 1 < planData.exercises.length) ? planData.exercises[curruntIndex+1].name : 'Workout Complete!'}</span>
                    <div className="player-buttons">
                        {isPlaying ? <FaPause onClick={() => setIsPlaying(false)}/>
                        : <FaPlay onClick={() => setIsPlaying(true)}/>}
                        {(currentImage === rest_animation) ? 
                            <FaForward className="icon-disabled"/> 
                            : <FaForward onClick={() => handleForward()}/>
                        }

                    </div>
                </div>
                <div className="timer-wrapper">
                    <CountDownTimer
                        isPlaying={isPlaying}
                        level={planData.level}
                        next={next}
                        nextOff={() => setNext(false)}
                        onExerciseComplete={handleExerciseComplete}>     
                    </CountDownTimer>
                </div>
            </div>
            <WorkoutCompleteModal show={showModal}
                onClose={() => setShowModal(false)}
                level={planData.level}
                time={planData.exercises.length}
                isReplay={planData.isReplay}
                onSave={saveWorkout}/>
        </div>
    );
}

export default PlayerPage;