import React from "react";
import styles from "./LogoContainer.module.css";
import VerificationIcon from "./VerificationIcon";

function VerificationSuccess() {
  return (
    <section className={styles.verificationContainer}>
      <div className={styles.verificationContent}>
        <VerificationIcon />
        <h1 className={styles.verificationText}>
          Liveliness verification successful!
        </h1>
      </div>
    </section>
  );
}

export default VerificationSuccess;
