import React, { useState } from 'react';
import './TimePicker.css';

function TimePicker(props) {
    const [ltime, setLtime] = useState('00');
    const [rtime, setRtime] = useState('00');

    function onLtimeChange(e) {
        let lvalue = e.target.value;

        if(lvalue.length === 1)
            lvalue = '0' + lvalue;
        
        else if(lvalue.length === 3)
            lvalue = lvalue.substring(1);
        
        if(lvalue <= 2)
            setLtime(lvalue);
    }

    function onRtimeChange(e) {
        let rvalue = e.target.value;

        if(rvalue.length === 1)
            rvalue = '0' + rvalue;
        
        else if(rvalue.length === 3)
            rvalue = rvalue.substring(1);
        
        if(rvalue <= 59)
            setRtime(rvalue);
    }

    return (
        <>
            <input id="ltime" type="number" value={ltime} onChange={onLtimeChange} min={0} max={9}/>
            <span> : </span>
            <input id="rtime" type="number" value={rtime} onChange={onRtimeChange} min={0} max={59}/>
        </>
    );
}

export default TimePicker;