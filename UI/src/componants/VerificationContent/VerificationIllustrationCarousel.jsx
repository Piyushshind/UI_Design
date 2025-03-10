import React from 'react'
import styles from "./VerificationContent.module.css";
import Carousel from './Carousel';
import { windowWidthState } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';
import CustomButton from '../buttons/CustomButton';

const VerificationIllustrationCarousel = () => {
        const windowWidth = useRecoilValue(windowWidthState);
        const isMobile = windowWidth <= 991;
    return (
        <>
            <aside className={styles.illustrationColumn}>
                <Carousel />
                {isMobile ? <CustomButton className={styles.continueButton} btnContent={"Continue"} /> : null}
            </aside>
        </>
    )
}

export default VerificationIllustrationCarousel;
