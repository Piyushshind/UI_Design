import React from "react";
import styles from "./ErrorPage.module.css";

export function ErrorPage() {
    const handleReturnHome = () => {
        window.location.href = "/"; // Or use your routing system's navigation
    };

    return (
        <main className={styles.errorContainer}>
            <div className={styles.content}>
                <div className={styles.animatedBank}>
                    <div className={styles.bankBuilding}>
                        <div className={styles.bankDoor}></div>
                        <div className={styles.bankWindows}></div>
                    </div>
                </div>

                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Secure Area: Access Denied</h2>

                <div className={styles.messageBox}>
                    <p className={styles.message}>
                        We're sorry, but this area is restricted. For security reasons,
                        direct URL modifications are not allowed in our Video KYC system.
                    </p>
                    <p className={styles.submessage}>
                        Please return to the authorized verification process.
                    </p>
                </div>

                <button
                    onClick={handleReturnHome}
                    className={styles.returnButton}
                    aria-label="Return to home page"
                >
                    <span className={styles.buttonIcon}>🏦</span>
                    Return to Verification
                </button>

                <div className={styles.securityBadge}>
                    <span className={styles.badgeIcon}>🔒</span>
                    <p className={styles.badgeText}>Bank-Grade Security</p>
                </div>
            </div>
        </main>
    );
}
