import React from "react";
import styles from "./VerificationContent.module.css";
import VerificationIllustration from "./VerificationIllustration";
import ProgressDots from "./ProgressDots";

function VerificationContent() {
  return (
    <section className={styles.mainContent}>
      <div className={styles.leftContent}>
        <div className={styles.verificationText}>
          <h1 className={styles.title}>
            Let's verify your liveliness in 15 seconds
          </h1>
          <p className={styles.subtitle}>
            Liveliness verification is necessary to proceed with your
            application.
          </p>
        </div>
        <button className={styles.continueButton}>Continue</button>
      </div>
      <div className={styles.rightContent}>
        <VerificationIllustration />
        <p className={styles.instructionText}>
          Ensure your face is clearly visible and centered within the camera
          frame.
        </p>
        <div className={styles.progressDots}>
          <ProgressDots />
        </div>
      </div>
    </section>
  );
}

export default VerificationContent;
