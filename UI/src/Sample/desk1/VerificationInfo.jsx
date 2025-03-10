import React from "react";
import styles from "./VerificationInfo.module.css";

const VerificationInfo = () => {
  return (
    <article className={styles.infoColumn}>
      <div className={styles.infoContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8b66844651b44a489c194c6e646c2609/1825ce304a66b14e953781b70c869b8116df6392830f8755c9c695670bffbdf8?placeholderIfAbsent=true"
          alt="Company Logo"
          className={styles.logo}
        />
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>
              Let's verify your liveliness in 15 seconds
            </h1>
            <p className={styles.description}>
              Liveliness verification is necessary to proceed with your
              application.
            </p>
          </div>
        </div>
        <button className={styles.continueButton}>Continue</button>
      </div>
    </article>
  );
};

export default VerificationInfo;
