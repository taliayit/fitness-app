import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function CountDownTimer({isPlaying, level, onExerciseComplete}) {
    const [isRestTime, setIsRestTime] = useState(true);
    const [duration, setDuration] = useState(3);
    const [key, setKey] = useState(0);

    let activeTime;
    let restTime;

    setTimes();
    // useEffect(() => {
    //     setTimes();
    // }, []);

    function setTimes() {
        switch(level) {
            case 1: 
                activeTime = 1;
                restTime = 1;
                break;
            case 2: 
                activeTime = 40;
                restTime = 20;
                break;
            case 3: 
                activeTime = 50;
                restTime = 10;
                break;
            default:
        }
    }
    
    const renderTime = ({ remainingTime }) => {      
        return (
            <div className="timer">
                <div className="value">{remainingTime}</div>
                <div className="text">seconds</div>
            </div>
        );
    };
    
    return (
        <div>
            <CountdownCircleTimer
                key={key}
                isPlaying={isPlaying}
                duration={duration}
                size={110}
                strokeWidth={7}
                colors={[["#ff8e8a", 0.33], ["#fa7470", 0.33], ["#df6763"]]}
                onComplete={() => {
                    setDuration(isRestTime ? activeTime : restTime);
                    setIsRestTime(!isRestTime);
                    setKey(prevKey => prevKey + 1);
                    if(key !== 0)
                        onExerciseComplete(isRestTime);
                    return [true, 1000]}
                }
                >
                {renderTime}
            </CountdownCircleTimer>

        </div>
    );
}

export default CountDownTimer;