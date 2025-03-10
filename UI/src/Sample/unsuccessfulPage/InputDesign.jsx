"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import ErrorIcon from "./ErrorIcon";
import RecordButton from "./RecordButton";
import VerificationStatus from "./VerificationStatus";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/74136ccedf5ef038047d0276d296549d00b6016c"
          alt="Netwin logo"
          className={styles.logo}
        />
        <div className={styles.content}>
          <ErrorIcon />
          <VerificationStatus />
          <button className={styles.recordButton}>
            <RecordButton />
            Record Again
          </button>
          <p className={styles.attempts}>3 attempts left</p>
        </div>
      </main>
    </>
  );
}

export default InputDesign;
