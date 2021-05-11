import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function CountDownTimer({isPlaying, level}) {
    
    const renderTime = ({ remainingTime }) => {
        // if (remainingTime === 0) {
        //   return <div className="timer">Too lale...</div>;
        // }
      
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
                isPlaying={isPlaying}
                duration={10}
                size={120}
                strokeWidth={8}
                colors={[["#ff8e8a", 0.33], ["#fa7470", 0.33], ["#df6763"]]}
                onComplete={() => {
                    return [true, 1000]}
                }
                >
                {renderTime}
            </CountdownCircleTimer>

        </div>
    );
}

export default CountDownTimer;