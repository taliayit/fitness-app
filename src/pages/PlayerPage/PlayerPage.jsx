import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import './PlayerPage.css';

function PlayerPage({level, exercises}) {
    const [isPlaying, setIsPlaying] = useState(false);
    level = 2; //for debugging

    return (
        <div className="p-player-page">
            <Button onClick={() => setIsPlaying(!isPlaying)}>Start</Button>
            <div className="timer-wrapper">
                <CountDownTimer isPlaying={isPlaying} level={level}></CountDownTimer>
            </div>
        </div>
    );
}

export default PlayerPage;