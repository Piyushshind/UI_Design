import React from "react";
import styles from "./CamRecorder.module.css";

function RecordButton({ translations, isEnabled = false, onClick }) {
  return (
    <button className={styles.recordButton}
      disabled={!isEnabled}
      onClick={onClick}
      aria-label={isEnabled ? "Start Recording" : "Recording not available"}
    >
      <img src={`${import.meta.env.VITE_APP_ASSETS_PATH}videoIcon.svg`} alt="video icon" className={styles.icon} />
      <span className={styles.buttonText}>{translations.startRecording}</span>
    </button>
  );
}

export default RecordButton;
