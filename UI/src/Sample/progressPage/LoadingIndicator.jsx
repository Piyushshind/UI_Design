import React from "react";
import styles from "./InputDesign.module.css";

export const LoadingIndicator = () => {
  return (
    <div className={styles.loadingDots}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};
