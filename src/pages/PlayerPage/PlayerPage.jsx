import React, { useEffect, useState } from 'react';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import { FaPlay, FaPause } from 'react-icons/fa';
import rest_animation from '../../assets/images/rest_animation.gif';
import './PlayerPage.css';
import { Redirect } from 'react-router-dom';
import WorkoutCompleteModal from '../../components/WorkoutCompleteModal/WorkoutCompleteModal';
// import Parse from 'parse';

function PlayerPage({activeUser, planData}) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [curruntIndex, setCurruntIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (planData)
            setCurrentImage(planData.exercises[0].image);
    }, []);
    
    if (!planData) {
        return <Redirect to="/"/>
    }

    function handleExerciseComplete(isRestTime) {
        if(curruntIndex + 1 < planData.exercises.length) {
            setCurruntIndex(curruntIndex + 1);
            if(isRestTime)
                setCurrentImage(planData.exercises[curruntIndex].image);
            else
                setCurrentImage(rest_animation);
        }
        else {
            setIsPlaying(false);
            //show workout complete modal
            setShowModal(true);
        }
    }
    
    async function saveWorkout(name) {
        console.log(activeUser)
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
                        <FaPlay onClick={() => setIsPlaying(true)}/>
                        <FaPause onClick={() => setIsPlaying(false)}/>
                    </div>
                </div>
                <div className="timer-wrapper">
                    <CountDownTimer isPlaying={isPlaying} level={planData.level} onExerciseComplete={handleExerciseComplete}></CountDownTimer>
                </div>
            </div>
            <WorkoutCompleteModal show={showModal}
                onClose={() => setShowModal(false)}
                level={planData.level}
                time={planData.exercises.length}
                onSave={saveWorkout}/>
        </div>
    );
}

export default PlayerPage;