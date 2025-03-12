import React, { useEffect } from "react";
import styles from "./AlertDialog.module.css"; // Assume you have styles for this component

const AlertDialog = ({
    isOpen,
    onClose,
    title,
    message,
    type = "info",
    primaryAction,
    secondaryAction,
}) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className={styles.overlay}
            onClick={(e) => e.target === e.currentTarget && onClose()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
        >
            <div className={`${styles.dialog} ${styles[type]}`}>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close dialog"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className={styles.header}>
                    <h2 className={styles.title} id="dialog-title">
                        {title}
                    </h2>
                </div>

                <div className={styles.message}>{message}</div>

                <div className={styles.actions}>
                    {secondaryAction && (
                        <button
                            className={styles.secondaryButton}
                            onClick={secondaryAction.onClick}
                        >
                            {secondaryAction.label}
                        </button>
                    )}
                    {primaryAction && (
                        <button
                            className={styles.primaryButton}
                            onClick={primaryAction.onClick}
                            autoFocus
                        >
                            {primaryAction.label}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AlertDialog;
