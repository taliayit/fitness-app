import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ExerciseModel from '../../model/ExerciseModel/ExerciseModel';
import fitness_loader from '../../assets/images/fitness_loader.gif';
import './PlanPage.css';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import { Col, Container, Row } from 'react-bootstrap';
import LockBodyScroll from '../../helpers/LockBodyScroll.jsx';
import LoginRequiredModal from '../../components/LoginRequiredModal/LoginRequiredModal';

function PlanPage({preferences, activeUser}) {
    const [workoutPlan, setWorkoutPlan] = useState(null);
    const [showModal, setShowModal] = useState(!activeUser);

    useEffect(() => {
        if(preferences) {
            let allMuscles = preferences.muscles.join();

            async function getExercises() {
                let url = `https://wger.de/api/v2/exercise/?format=json&language=2&limit=200&muscles=${allMuscles}`;
                const response = await axios.get(url);
                const dataExercises = response.data.results;
                let exercisesModelArray = []; 

                for(const e of dataExercises) {
                    const res = await axios.get(`https://wger.de/api/v2/exerciseinfo/${e.id}`);
                    const exerciseInfo = res.data;
                    if(exerciseInfo.images.length > 0) {
                        exercisesModelArray.push(new ExerciseModel(exerciseInfo.id, exerciseInfo.name, exerciseInfo.images[0].image));
                    }
                }
                createPlan(exercisesModelArray);
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
                    {!activeUser && (
                        <div>
                            <LoginRequiredModal show={showModal} onClose={() => setShowModal(false)}/>
                            <LockBodyScroll/>
                        </div>
                    )}
                    <Row><h2 className="bold-text m-auto">Your Workout Plan</h2></Row>
                    <Row>
                        {workoutPlan.map((exercise, index) => 
                            <Col key={index} lg={4} md={6} className="mt-4">
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