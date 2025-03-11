import React from "react";
import styles from "./CamRecorder.module.css";

function RecordButton() {
  return (
    <button className={styles.recordButton} aria-label="Start Recording">
      <img src="./assets/videoIcon.svg" alt="video icon" className={styles.icon} />
      <span className={styles.buttonText}>Start Recording</span>
    </button>
  );
}

export default RecordButton;
