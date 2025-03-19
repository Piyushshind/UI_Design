import React, { useEffect } from "react";
import styles from "./ErrorPage.module.css";
import { useRecoilValue } from "recoil";
import { authState } from "../../recoil/atom";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
    const authStatus = useRecoilValue(authState);
    const navigate = useNavigate();

    const handleReturnHome = () => {
        const customerId = authStatus.customerId;
        const token = authStatus.token;
        if (customerId && token) {
            navigate(`/customer/${customerId}/token/${token}`, { replace: true });
        } else {
            console.error('customerId or token not found, the link has been expired');
            navigate('/error',{ replace: true });
        }
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
                        direct URL modifications are not allowed in our Liveliness verification system.
                    </p>
                    <p className={styles.message}>
                        The link (URL) you are trying to access has possibly expired.
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
