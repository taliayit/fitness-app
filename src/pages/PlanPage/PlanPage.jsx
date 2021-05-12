import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ExerciseModel from '../../model/ExerciseModel/ExerciseModel';
import fitness_loader from '../../assets/images/fitness_loader.gif';
import './PlanPage.css';

function PlanPage({preferences}) {
    const [exercises, setExercises] = useState(null);
    const [workoutPlan, setWorkoutPlan] = useState(null);

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
                setExercises(exercisesModelArray);
            }
            getExercises();
        }
    }, []);

    useEffect(() => {
        console.log(exercises);
        if(exercises) {
            createPlan();
        }
    }, [exercises]);

    useEffect(() => {
        console.log(workoutPlan);
    }, [workoutPlan]);

    if (!preferences) {
        return <Redirect to="/"/>
    }

    function createPlan() {
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
            {exercises && workoutPlan ? 
                <div>
                    
                </div>
                : <div className="loader-wrapper">
                    <img src={fitness_loader} alt=""/>
                    <p className="bold-text">Pumping. . .</p>
                </div>}
        </div>
    );
}

export default PlanPage;