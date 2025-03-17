import React from "react";
import styles from "./CamRecorder.module.css";
import Webcam from "react-webcam";
import { activateWebCamState, isValidHumanFaceDetectedState } from "../../recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import useFaceDetection from "../../hooks/useFaceDetection";

function VideoRecorder({ webcamRef }) {
  const [isWebCamActive, setIsWebCamActive] = useRecoilState(activateWebCamState);

  const IsValidHumanFaceDetected = useRecoilValue(isValidHumanFaceDetectedState);
  const { startPreRecordingCheck } = useFaceDetection(webcamRef);

  if (!IsValidHumanFaceDetected) {
    setIsWebCamActive(true)
    // console.log("startPreRecordingCheck started ..");
    startPreRecordingCheck();
    // console.log("startPreRecordingCheck has ended  ..");

  }

  return (
    <>
      <section className={styles.faceRecordingSection}>
        <div className={styles.webcamContainer}>
          {isWebCamActive &&
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
          }
        </div>
      </section>
    </>
  );
}

export default VideoRecorder;
