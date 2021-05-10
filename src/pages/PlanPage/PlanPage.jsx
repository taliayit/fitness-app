import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

function PlanPage({preferences}) {
    const [exercises, setExercises] = useState(null);

    useEffect(() => {
        // console.log(preferences);
        let allMuscles = preferences.muscles.join();

        async function getExercises() {
            let url = `https://wger.de/api/v2/exercise/?format=json&limit=200&muscles=${allMuscles}`;
            const response = await axios.get(url);
            let dataExercises = response.data.results;
            console.log(dataExercises)
        }
        getExercises();

    }, []);

    if (!preferences) {
        return <Redirect to="/"/>
    }

    return (
        <div>
            
        </div>
    );
}

export default PlanPage;