"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import VideoRecorder from "./VideoRecorder";
import InstructionBox from "./InstructionBox";
import RecordButton from "./RecordButton";

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
          alt="Netwin Logo"
          className={styles.logo}
        />
        <section className={styles.contentWrapper}>
          <p className={styles.instructionText}>
            Record a video while following the instructions displayed on your
            screen.
          </p>
          <InstructionBox />
          <VideoRecorder />
          <RecordButton />
        </section>
      </main>
    </>
  );
}

export default InputDesign;
