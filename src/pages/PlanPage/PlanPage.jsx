import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function PlanPage({preferences}) {

    useEffect(() => {
        console.log(preferences);
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