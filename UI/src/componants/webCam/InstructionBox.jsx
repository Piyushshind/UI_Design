import React from "react";
import styles from "./CamRecorder.module.css";

function InstructionBox({ translations, generatedOtp }) {
  return (
    <>
      {generatedOtp == null || generatedOtp === "" ?
        <div className={styles.instructionBox}>
          {translations.holdFacePosition}
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
