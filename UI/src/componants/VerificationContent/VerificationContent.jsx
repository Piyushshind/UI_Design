import React, { useEffect } from 'react'
import styles from "./VerificationContent.module.css";
import VerificationInfo from './VerificationInfo';
import VerificationIllustrationCarousel from './VerificationIllustrationCarousel';
import { useSetRecoilState } from 'recoil';
import { windowWidthState } from '../../recoil/atom';
import Navbar from '../navbar/Navbar';


const VerificationContent = () => {
    const setWindowWidth = useSetRecoilState(windowWidthState);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setWindowWidth]);

    return (
        <>
            <main className={styles.verificationPage}>
                <Navbar />
                <section className={styles.contentContainer}>
                    <div className={styles.contentWrapper}>
                        <VerificationInfo />
                        <VerificationIllustrationCarousel />
                    </div>
                </section>
            </main>

        </>
    )
}

export default VerificationContent