import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ExerciseModel from '../../model/ExerciseModel/ExerciseModel';
import fitness_loader from '../../assets/images/fitness_loader.gif';
import './PlanPage.css';

function PlanPage({preferences}) {
    const [exercises, setExercises] = useState(null);
    
    useEffect(() => {
        if(preferences) {
            let allMuscles = preferences.muscles.join();

            async function getExercises() {
                let url = `https://wger.de/api/v2/exercise/?format=json&language=2&limit=200&muscles=${allMuscles}`;
                const response = await axios.get(url);
                let dataExercises = response.data.results;

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
    }, [exercises]);

    if (!preferences) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-plan-page">
            {exercises ? 
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