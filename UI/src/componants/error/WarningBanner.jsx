import React, { useEffect, useState } from "react";
import styles from "./ErrorPage.module.css";

export function WarningBanner() {
    const [showModal, setShowModal] = useState(true);

    // Auto-hide the modal after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    if (!showModal) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent} role="alertdialog" aria-modal="true">
                <div className={styles.modalHeader}>
                    <div className={styles.warningIcon}>⚠️</div>
                    <h2 className={styles.modalTitle}>Important Warning</h2>
                </div>
                <div className={styles.modalBody}>
                    <p className={styles.warningText}>
                        Please do not navigate back, forward, or reload this page during the
                        verification process.
                    </p>
                    <p className={styles.warningText}>
                        Doing so will terminate the process and you'll need to start over.
                    </p>
                </div>
                <div className={styles.modalFooter}>
                    <button
                        className={styles.modalButton}
                        onClick={() => setShowModal(false)}
                    >
                        I understand
                    </button>
                </div>
            </div>
        </div>
    );
}
