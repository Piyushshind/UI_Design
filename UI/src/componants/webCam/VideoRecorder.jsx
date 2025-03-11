import React from "react";
import styles from "./CamRecorder.module.css";
import Webcam from "react-webcam";

function VideoRecorder() {

  return (
    <>
      <section className={styles.faceRecordingSection}>
        <div className={styles.webcamContainer}>
          <Webcam
            className={styles.webcamPreview}
            videoConstraints={{
              facingMode: "user",
              aspectRatio: 1.5,
              width: { ideal: 1080 },
              height: { ideal: 720 },
            }}
            mirrored={true}
            onUserMediaError={(err) => {
              console.error("Webcam Error:", err);
            }}
          />
        </div>
      </section>
    </>
  );
}

export default VideoRecorder;
