import React from 'react'
import styles from './VerificationUnsuccessPage.module.css';
import CustomLogoImage from '../company_logo/CustomLogoImage';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../recoil/atom';
import { languageData } from '../../recoil/LanguageData/translations';

const VerificationUnsuccessPage = () => {
    const selectedLanguage = useRecoilValue(languageState);
    const translations = languageData[selectedLanguage];
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Manrope:wght@400;500&display=swap"
                rel="stylesheet"
            />
            <main className={styles.container}>
                <header className={styles.header}>
                    <CustomLogoImage
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/74136ccedf5ef038047d0276d296549d00b6016c"
                        alt="Logo"
                        className={styles.logo}
                    />
                </header>
                <section className={styles.content}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.iconWrapper}>
                            <CustomLogoImage
                                src="/assets/UnsuccessfullImage.svg"
                                alt="Verification Unsuccessful"
                                className={styles.warningIcon}
                            />
                        </div>
                        <div className={styles.messageContainer}>
                            <h1 className={styles.title}>
                                {translations.verificationFailed}
                            </h1>
                            <p className={styles.description}>
                                {translations.verificationFailedDueToTime}
                            </p>
                        </div>
                        <button className={styles.recordButton} aria-label="Record Again">
                            <div className={styles.buttonContent}>
                                <img
                                    src="/assets/videoIcon.svg"
                                    alt=""
                                    className={styles.recordIcon}
                                />
                                <span className={styles.buttonText}>{translations.recordAgain}</span>
                            </div>
                        </button>
                        <p className={styles.attemptsText}>{translations.attemptsLeft}</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default VerificationUnsuccessPage;