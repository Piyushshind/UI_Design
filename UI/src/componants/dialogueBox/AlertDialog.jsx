import React, { useEffect } from "react";
import styles from "./AlertDialog.module.css";

const icons = {
    error: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.icon}
        >
            <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z"
            />
        </svg>
    ),
    warning: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.icon}
        >
            <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z"
            />
        </svg>
    ),
    info: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.icon}
        >
            <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            />
        </svg>
    ),
};

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
                    {/* {icons[type]} */}
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
