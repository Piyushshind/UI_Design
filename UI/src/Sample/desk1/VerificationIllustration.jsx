import React from "react";
import styles from "./VerificationIllustration.module.css";

const VerificationIllustration = () => {
  return (
    <aside className={styles.illustrationColumn}>
      <div className={styles.illustrationContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8b66844651b44a489c194c6e646c2609/0658e8f3be74d9d78f2d80040d24727c8ca34279070ed618ee6871090a914a7b?placeholderIfAbsent=true"
          alt="Verification Illustration"
          className={styles.illustration}
        />
        <div className={styles.pagination}>
          <div className={styles.paginationDotActive} />
          <div className={styles.paginationDot} />
          <div className={styles.paginationDot} />
        </div>
      </div>
    </aside>
  );
};

export default VerificationIllustration;
