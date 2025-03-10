import React from "react";
import styles from "./LivelinessVerification.module.css";

export function ProgressIndicator() {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressDot} />
      <div className={styles.progressDot} />
      <div className={styles.progressDotActive} />
    </div>
  );
}
