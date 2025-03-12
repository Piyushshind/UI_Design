import React, { useRef } from "react";
import styles from "./CamRecorder.module.css";
import Webcam from "react-webcam";

function VideoRecorder() {
  const webcamRef = useRef(null);

  return (
    <>
      <section className={styles.faceRecordingSection}>
        <div className={styles.webcamContainer}>
          <Webcam
            ref={webcamRef}
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
