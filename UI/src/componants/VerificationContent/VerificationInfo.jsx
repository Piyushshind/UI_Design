import React from 'react'
import styles from "./VerificationContent.module.css";
import CustomButton from '../buttons/CustomButton';
import { windowWidthState } from '../../recoil/atom'
import { useRecoilValue } from 'recoil';
import CustomLogoImage from '../company_logo/CustomLogoImage';

const VerificationInfo = () => {
    const windowWidth = useRecoilValue(windowWidthState);
    const isMobile = windowWidth <= 991;

    return (
        <>
            <article className={styles.infoColumn}>
                <div className={styles.infoContent}>
                    <div className={styles.textContent}>
                        <div className={styles.textWrapper}>
                            <h1 className={styles.title}>
                                Let's verify your liveliness in 15 seconds
                            </h1>
                            <p className={styles.description}>
                                Liveliness verification is necessary to proceed with your
                                application.
                            </p>
                        </div>
                    </div>
                    {!isMobile ? <CustomButton className={styles.continueButton} btnContent={"Continue"} /> : null}
                </div>
            </article>
        </>
    )
}

export default VerificationInfo;