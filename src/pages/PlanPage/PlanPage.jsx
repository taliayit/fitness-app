import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import ExerciseModel from '../../model/ExerciseModel/ExerciseModel';
import fitness_loader from '../../assets/images/fitness_loader.gif';
import './PlanPage.css';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import { Col, Container, Row } from 'react-bootstrap';
import LockBodyScroll from '../../helpers/LockBodyScroll.jsx';
import LoginRequiredModal from '../../components/LoginRequiredModal/LoginRequiredModal';

function PlanPage({preferences, activeUser, onPlay}) {
    const [workoutPlan, setWorkoutPlan] = useState(null);
    const [showModal, setShowModal] = useState(!activeUser);

    useEffect(() => {
        if(preferences) {
            let allMuscles = preferences.muscles.join();

            async function getExercises() {
                let url = `https://wger.de/api/v2/exercise/?format=json&language=2&limit=200&muscles=${allMuscles}`;
                const response = await axios.get(url);
                const dataExercises = response.data.results;
                let exercises = []; 

                for(const e of dataExercises) {
                    const res = await axios.get(`https://wger.de/api/v2/exerciseinfo/${e.id}`);
                    const exerciseInfo = res.data;
                    if(exerciseInfo.images.length > 0) {
                        exercises.push(new ExerciseModel(exerciseInfo.id, exerciseInfo.name, exerciseInfo.images[0].image, exerciseInfo.category.name));
                    }
                }
                createPlan(exercises);
            }
            getExercises();
        }
    }, []);
    
    useEffect(() => {
        setShowModal(!activeUser);
    }, [activeUser]);

    if (!preferences) {
        return <Redirect to="/"/>
    }

    function createPlan(exercises) {
        let planArr = [];
        if(exercises.length > preferences.time) {
            planArr = exercises.slice(0, preferences.time);
        }
        else if(exercises.length < preferences.time){
            while(planArr.length + exercises.length < preferences.time) {
                planArr = planArr.concat(exercises);
            }
            planArr = planArr.concat(exercises.splice(0, preferences.time - planArr.length));
        }
        else {
            planArr = exercises;
        }
        setWorkoutPlan(planArr);
    }

    return (
        <div className="p-plan-page">
            {workoutPlan ? 
                <Container>
                    {!activeUser && (<LoginRequiredModal show={showModal} onClose={() => setShowModal(false)}/>)}
                    {!activeUser && (<LockBodyScroll/>)}
                    
                    <div className="header">
                        <h2 className="bold-text my-3">Your Workout Plan</h2>
                        {activeUser &&
                            (<Link 
                                to="/player"
                                id="red-btn"
                                onClick={() => onPlay({level: preferences.level, exercises: workoutPlan, isReplay:false})}>
                                Let's Workout
                            </Link>)}
                    </div>
                    <Row>
                        {workoutPlan.map((exercise, index) => 
                            <Col key={index} lg={4} md={6} className="my-3">
                                <ExerciseCard exercise={exercise} blured={activeUser === null}/>
                            </Col>
                        )}
                    </Row>
                </Container>
                : <div className="loader-wrapper">
                    <img src={fitness_loader} alt=""/>
                    <p className="bold-text">Pumping. . .</p>
                </div>}
        </div>
    );
}

export default PlanPage;