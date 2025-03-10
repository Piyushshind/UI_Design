import React from "react";
import styles from "./InputDesign.module.css";
import { RecordButtonSvg } from "./Icons";

function RecordButton() {
  return (
    <button className={styles.recordButton}>
      <RecordButtonSvg />
    </button>
  );
}

export default RecordButton;
