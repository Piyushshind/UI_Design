import React from "react";
import styles from "./CamRecorder.module.css";
import { useRecoilValue } from "recoil";
import { setPreRecordingErrorMessageState } from "../../recoil/atom";

function InstructionBox({ translations, generatedOtp }) {
  const prerecordingErrorMessage = useRecoilValue(setPreRecordingErrorMessageState);

  return (
    <>
      {generatedOtp == null || generatedOtp === "" ?
        <div className={styles.instructionBox}>
          {prerecordingErrorMessage ? prerecordingErrorMessage : translations.holdFacePosition}
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
