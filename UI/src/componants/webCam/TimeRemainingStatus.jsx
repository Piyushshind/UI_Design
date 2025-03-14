import React from 'react'
import styles from './CamRecorder.module.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const TimeRemainingStatus = ({ timeRemaining = 5 }) => {

    return (
        <div className={styles.statusContainer}>
            <div className={styles.timerWrapper}>
                <CountdownCircleTimer
                    isPlaying={true}
                    duration={15}
                    colors={["#2181DA"]}
                    strokeWidth={4}
                    size={60}
                    trailColor="#E2F1FF"
                >
                    {({ remainingTime }) => (
                        <span className={styles.timerText}>{remainingTime}</span>
                    )}
                </CountdownCircleTimer>
            </div>
            <p className={styles.statusText}>Recording your face</p>
        </div>
    );
}

export default TimeRemainingStatus;

