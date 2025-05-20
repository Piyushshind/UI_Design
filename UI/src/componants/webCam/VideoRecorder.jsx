import React, { useEffect } from "react";
import styles from "./CamRecorder.module.css";
import Webcam from "react-webcam";
import { activateWebCamState, isValidHumanFaceDetectedState } from "../../recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
// import useFaceDetection from "../../hooks/useFaceDetection";

function VideoRecorder({ webcamRef, startPreRecordingCheck }) {
  const [isWebCamActive, setIsWebCamActive] = useRecoilState(activateWebCamState);

  const IsValidHumanFaceDetected = useRecoilValue(isValidHumanFaceDetectedState);
  // const { startPreRecordingCheck } = useFaceDetection(webcamRef);

  useEffect(() => {
    // console.log("useEffect runs IsValidHumanFaceDetected :- ", IsValidHumanFaceDetected,);

    if (!IsValidHumanFaceDetected) {
      setIsWebCamActive(true);
      startPreRecordingCheck();
    }
  }, [IsValidHumanFaceDetected]);

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
