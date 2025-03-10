import React from "react";
import styles from "./InputDesign.module.css";
import { FrameBorder } from "./Icons";

function VideoRecorder() {
  return (
    <section className={styles.videoFrame}>
      <FrameBorder />
      <div className={styles.faceScanOverlay} />
    </section>
  );
}

export default VideoRecorder;
