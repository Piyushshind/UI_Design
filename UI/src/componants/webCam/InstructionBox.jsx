import React from "react";
import styles from "./CamRecorder.module.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isValidHumanFaceDetectedState, setPreRecordingErrorMessageState } from "../../recoil/atom";

function InstructionBox({ translations, generatedOtp, startPreRecordingCheck }) {
  const [prerecordingErrorMessage, setPrerecordingErrorMessage] = useRecoilState(setPreRecordingErrorMessageState);
  const setIsValidHumanFaceDetected = useSetRecoilState(isValidHumanFaceDetectedState);

  const handleRetry = () => {
    setIsValidHumanFaceDetected(false);
    setPrerecordingErrorMessage('')
    startPreRecordingCheck();
  };

  return (
    <>
      {generatedOtp == null || generatedOtp === "" ?
        <div className={styles.instructionBox}>
          {prerecordingErrorMessage ? (
            <>
              <div className={styles.instructionBoxErrorMsg } >{prerecordingErrorMessage}</div>
              <button onClick={handleRetry} className={styles.retryBtn} >Retry</button>
            </>
          ) : translations.holdFacePosition}
        </div>
        :
        <div className={styles.codeContainer}>
          <div className={styles.codeWrapper}>
            <div className={styles.code}>{generatedOtp}</div>
          </div>
        </div>
      }
    </>
  )
}

export default InstructionBox;
