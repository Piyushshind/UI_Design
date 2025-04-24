import React, { useEffect, useState } from 'react'
import styles from './VerificationUnsuccessPage.module.css';
import CustomLogoImage from '../company_logo/CustomLogoImage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState, isValidHumanFaceDetectedState, languageState, recordingButtonEnableState } from '../../recoil/atom';
import { languageData } from '../../recoil/LanguageData/translations';
import { useLocation, useNavigate } from 'react-router-dom';

const VerificationUnsuccessPage = () => {
    const selectedLanguage = useRecoilValue(languageState);
    const authStatus = useRecoilValue(authState);
    const translations = languageData[selectedLanguage];
    const location = useLocation();
    const navigate = useNavigate();
    const response = location.state?.response;
    const [attemptUsedMessage, setAttemptUsedMessage] = useState(null);
    const [reasonMessage, setReasonMessage] = useState('');
    const setIsValidHumanFaceDetected = useSetRecoilState(isValidHumanFaceDetectedState);
    const setIsRecordingButtonEnabled = useSetRecoilState(recordingButtonEnableState);



    useEffect(() => {
        if (response) {
            if (response.status === 'IM_USED') {
                console.warn(response.message);
                setAttemptUsedMessage("Sorry! but you have already attempted 3 times");
                // alert(response.message);
                // console.log("from fail page ", response);
            }
            if (response.reasons) {
                setReasonMessage(response.reasons[0] || "");
            }
        }
    }, [response]);

    const handleRecordAgain = () => {
        const customerId = authStatus.customerId;
        const token = authStatus.token;
        // console.log(authStatus);

        if (customerId && token) {
            setIsValidHumanFaceDetected(false);
            setIsRecordingButtonEnabled(false)
            navigate(`/customer/${customerId}/token/${token}`, { replace: true });
        } else {
            console.error('customerId or token not found');
            navigate('/error', { replace: true });
        }
    }

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Manrope:wght@400;500&display=swap"
                rel="stylesheet"
            />
            <main className={styles.container}>
                <header className={styles.header}>
                    <CustomLogoImage
                        src={`${import.meta.env.VITE_APP_ASSETS_PATH}netwin_logo.svg`}
                        alt="Logo"
                        className={styles.logo}
                    />
                </header>
                <section className={styles.content}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.iconWrapper}>
                            <CustomLogoImage
                                src={`${import.meta.env.VITE_APP_ASSETS_PATH}UnsuccessfullImage.svg`}
                                alt="Verification Unsuccessful"
                                className={styles.warningIcon}
                            />
                        </div>
                        <div className={styles.messageContainer}>
                            <h1 className={styles.title}>
                                {translations.verificationFailed}
                            </h1>
                            <p className={styles.description}>
                                {reasonMessage}
                                {/* {translations.verificationFailedDueToTime} */}
                            </p>
                        </div>
                        <button className={styles.recordButton} aria-label="Record Again" onClick={handleRecordAgain}>
                            <div className={styles.buttonContent}>
                                <img
                                    src={`${import.meta.env.VITE_APP_ASSETS_PATH}videoIcon.svg`}
                                    alt="videoIcon"
                                    className={styles.recordIcon}
                                />
                                <span className={styles.buttonText}>{translations.recordAgain}</span>
                            </div>
                        </button>

                        <p className={styles.attemptsText}>{(3 - (authStatus.usedCount))} {(3 - (authStatus.usedCount)) <= 1 ? translations.attemptLeft : translations.attemptsLeft}</p>
                        {attemptUsedMessage && <p className={styles.attemptsText}>{attemptUsedMessage}</p>}
                    </div>
                </section>
            </main>
        </>
    )
}

export default VerificationUnsuccessPage;