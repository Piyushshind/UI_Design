"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import { VerificationContent } from "./VerificationContent";

function InputDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600&family=Inter:wght@600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://placehold.co/66x24/ffffff/ffffff"
            alt="Netwin Logo"
          />
        </div>
        <VerificationContent />
      </main>
    </>
  );
}

export default InputDesign;
