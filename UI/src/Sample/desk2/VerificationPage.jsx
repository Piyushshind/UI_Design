"use client";
import * as React from "react";
import styles from "./VerificationPage.module.css";
import SearchBar from "./SearchBar";
import VerificationContent from "./VerificationContent";

function VerificationPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Manrope:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <SearchBar />
        <VerificationContent />
      </main>
    </>
  );
}

export default VerificationPage;
