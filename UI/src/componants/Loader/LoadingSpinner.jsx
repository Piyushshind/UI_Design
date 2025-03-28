import React from "react";
import styles from "./LoadingSpinner.module.css";
import { StatusMessage } from "./StatusMessage";

export function LoadingSpinner({ isFullScreen = false }) {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600&family=Inter:wght@600&display=swap"
                rel="stylesheet"
            />
            <main className={styles.container}>
                <section className={styles.contentWrapper}>
                    <img
                        src={`${import.meta.env.VITE_APP_ASSETS_PATH}processing_loader.gif`}
                        alt="Processing"
                        className={styles.loaderImage}
                    />
                    <StatusMessage />
                </section>
            </main>
        </>
    );
}
