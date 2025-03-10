import React from "react";
import styles from "./InputDesign.module.css";
import { LoadingIndicator } from "./LoadingIndicator";

export const VerificationContent = () => {
  return (
    <section className={styles.verificationContent}>
      <LoadingIndicator />
      <h1 className={styles.verificationText}>
        <span>Liveliness verification</span>
        <br />
        <span>in progress</span>
      </h1>
      <p className={styles.verificationSubtext}>
        Hold tight, it won't take long
      </p>
    </section>
  );
};
