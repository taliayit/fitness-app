import React from 'react';
import { Redirect } from 'react-router-dom';

function CustomizePage({activeUser}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    return (
        <div>
            CustomizePage
        </div>
    );
}

export default CustomizePage;