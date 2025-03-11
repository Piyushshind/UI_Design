import React from "react";
import styles from "./CamRecorder.module.css";

function InstructionBox({ translations }) {
  return (
    <div className={styles.instructionBox}>
      {translations.holdFacePosition}
    </div>
  );
}

export default InstructionBox;
