import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ExerciseModel from '../../model/ExerciseModel/ExerciseModel';
import fitness_loader from '../../assets/images/fitness_loader.gif';
import './PlanPage.css';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';
import { Col, Container, Row } from 'react-bootstrap';

function PlanPage({preferences}) {
    const [workoutPlan, setWorkoutPlan] = useState(null);
    let exerciseCards = [];

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

    if(workoutPlan) 
        exerciseCards = workoutPlan.map((e, index) => <ExerciseCard key={index} exercise={e}/>);

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
            <Container>
                { workoutPlan ? 
                    <Row>
                        <Col>
                            {exerciseCards}
                        </Col>
                    </Row>
                    : <div className="loader-wrapper">
                    <img src={fitness_loader} alt=""/>
                    <p className="bold-text">Pumping. . .</p>
                </div>}
            </Container>
        </div>
    );
}

export default PlanPage;