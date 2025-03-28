import React from 'react'
import styles from './VerificationSuccessPage.module.css';
import CustomLogoImage from '../company_logo/CustomLogoImage';
import { useRecoilValue } from 'recoil';
import { languageData } from '../../recoil/LanguageData/translations';
import { languageState } from '../../recoil/atom';

const VerificationSuccessPage = () => {

    const selectedLanguage = useRecoilValue(languageState);
    const translations = languageData[selectedLanguage];

    return (
        <>
            <main className={styles.container}>
                <header className={styles.logoHeader}>
                    <CustomLogoImage
                        src={`${import.meta.env.VITE_APP_ASSETS_PATH}netwin_logo.svg`}
                        alt="Netwin logo"
                        className={styles.logo}
                    />
                </header>
                <section className={styles.contentSection}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={`${import.meta.env.VITE_APP_ASSETS_PATH}verificationSuccessfullImage.svg`}
                                alt="Verification successful"
                                className={styles.verificationIcon}
                            />
                        </div>
                        <h1 className={styles.title}>
                            {translations.verificationSuccessful}
                        </h1>
                    </div>
                </section>
            </main>
        </>
    )
}

export default VerificationSuccessPage;