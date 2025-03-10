import React from "react";
import styles from "./LivelinessVerification.module.css";
import { ProgressIndicator } from "./ProgressIndicator";

export function VerificationContent() {
  return (
    <section className={styles.mainContent}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8b66844651b44a489c194c6e646c2609/a6b7790099b2c2ad37a1675f29bebb0719016d87787ae7fbc1b6223df884ec70?placeholderIfAbsent=true"
        alt="Verification Icon"
        className={styles.verificationIcon}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8b66844651b44a489c194c6e646c2609/79b51a0419833d91864836005b2933bf74cbfe3d89c59652aa3496c56b5d88a3?placeholderIfAbsent=true"
        alt="Verification Preview"
        className={styles.previewImage}
      />
      <div className={styles.progressWrapper}>
        <ProgressIndicator />
      </div>
    </section>
  );
}
