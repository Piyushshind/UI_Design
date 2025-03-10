"use client";
import * as React from "react";
import styles from "./LivelinessVerification.module.css";
import { VerificationHeader } from "./VerificationHeader";
import { VerificationContent } from "./VerificationContent";
import { ProgressIndicator } from "./ProgressIndicator";

function LivelinessVerification() {
  return (
    <main className={styles.verificationContainer}>
      <section className={styles.contentWrapper}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.leftColumn}>
            <VerificationHeader />
          </div>
          <div className={styles.rightColumn}>
            <VerificationContent />
          </div>
        </div>
      </section>
    </main>
  );
}

export default LivelinessVerification;
