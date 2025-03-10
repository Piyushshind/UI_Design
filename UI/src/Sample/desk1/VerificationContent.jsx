import React from "react";
import VerificationInfo from "./VerificationInfo";
import VerificationIllustration from "./VerificationIllustration";
import styles from "./VerificationContent.module.css";

const VerificationContent = () => {
  return (
    <section className={styles.contentContainer}>
      <div className={styles.contentWrapper}>
        <VerificationInfo />
        <VerificationIllustration />
      </div>
    </section>
  );
};

export default VerificationContent;
