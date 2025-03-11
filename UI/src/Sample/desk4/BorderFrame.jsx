import React from "react";
import styles from "./BorderFrame.module.css";

function BorderFrame({ children }) {
  return (
    <div className={styles.borderContainer}>
      <div className={`${styles.corner} ${styles.topLeft}`} />
      <div className={`${styles.corner} ${styles.topRight}`} />
      <div className={`${styles.corner} ${styles.bottomLeft}`} />
      <div className={`${styles.corner} ${styles.bottomRight}`} />

      <div className={`${styles.border} ${styles.borderTop}`} />
      <div className={`${styles.border} ${styles.borderRight}`} />
      <div className={`${styles.border} ${styles.borderBottom}`} />
      <div className={`${styles.border} ${styles.borderLeft}`} />

      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default BorderFrame;
