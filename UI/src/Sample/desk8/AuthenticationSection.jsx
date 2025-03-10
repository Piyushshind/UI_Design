import React from "react";
import styles from "./Desktop8.module.css";

const AuthenticationSection = () => {
  return (
    <section className={styles.authenticationContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8b66844651b44a489c194c6e646c2609/1825ce304a66b14e953781b70c869b8116df6392830f8755c9c695670bffbdf8?placeholderIfAbsent=true"
        alt="Authentication logo"
        className={styles.authLogo}
      />
      <div className={styles.verificationSection}>
        <p className={styles.instructionText}>Speak the following aloud.</p>
        <div className={styles.verificationCode}>
          <div className={styles.codeDisplay}>842567</div>
        </div>
      </div>
      <div className={styles.faceRecordingSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8b66844651b44a489c194c6e646c2609/9a1be1e92502b5238e4632679c6b83d785832f25f6e629b45e6702e166e22f1f?placeholderIfAbsent=true"
          alt="Face recording preview"
          className={styles.recordingPreview}
        />
      </div>
      <div className={styles.recordingStatus}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8b66844651b44a489c194c6e646c2609/b9144143c14c5570957b27664fdf2a29aefc7428dba11b68ff9db1d6ef2900a8?placeholderIfAbsent=true"
          alt="Recording status icon"
          className={styles.statusIcon}
        />
        <p className={styles.statusText}>Recording your face</p>
      </div>
    </section>
  );
};

export default AuthenticationSection;
