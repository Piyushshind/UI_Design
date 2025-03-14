import React from "react";
import styles from "./LoadingSpinner.module.css";

export function LoadingSpinner({ isFullScreen = false }) {
    return (
        <div
            className={`${styles.loaderContainer} ${isFullScreen ? styles.fullScreen : ""}`}
        >
            <div
                className={styles.loaderWrapper}
                role="alert"
                aria-busy="true"
                aria-label="Loading"
            >
                <img
                    src="/assets/processing_loader.gif"
                    alt="Loading..."
                    className={styles.loaderGif}
                />
                <p className={styles.loadingText}>Processing your request...</p>
            </div>
        </div>
    );
}
