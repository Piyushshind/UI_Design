import React from 'react'
import styles from "./VerificationContent.module.css";
import CustomButton from '../buttons/CustomButton';
import { languageState, windowWidthState } from '../../recoil/atom'
import { languageData } from '../../recoil/LanguageData/translations'
import { useRecoilValue } from 'recoil';
import CustomLogoImage from '../company_logo/CustomLogoImage';

const VerificationInfo = () => {
    const windowWidth = useRecoilValue(windowWidthState);
    const isMobile = windowWidth <= 991;

    const selectedLanguage = useRecoilValue(languageState);
    const translations = languageData[selectedLanguage];

    return (
        <>
            <article className={styles.infoColumn}>
                <div className={styles.infoContent}>
                    <div className={styles.textContent}>
                        <div className={styles.textWrapper}>
                            <h1 className={styles.title}>
                                {translations.verificationMessage}
                            </h1>
                            <p className={styles.description}>
                                {translations.verificationRequired}
                            </p>
                        </div>
                    </div>
                    {!isMobile ? <CustomButton className={styles.continueButton} btnContent={translations.continue} /> : null}
                </div>
            </article>
        </>
    )
}

export default VerificationInfo;