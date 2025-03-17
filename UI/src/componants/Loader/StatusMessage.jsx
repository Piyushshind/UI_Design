import React from "react";
import styles from "./LoadingSpinner.module.css";

export function StatusMessage() {
    return (
        <>
            <h1 className={styles.title}>
                Liveliness verification
                <br />
                in progress
            </h1>
            <p className={styles.subtitle}>Hold tight, it won't take long</p>
        </>
    );
}
