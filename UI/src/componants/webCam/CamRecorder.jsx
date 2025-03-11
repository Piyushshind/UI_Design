import React from 'react'
import CustomLogoImage from '../company_logo/CustomLogoImage'
import styles from "./CamRecorder.module.css";
import InstructionBox from './InstructionBox';
import VideoRecorder from './VideoRecorder';
import RecordButton from './RecordButton';
import { useRecoilValue } from 'recoil';
import { languageData } from '../../recoil/LanguageData/translations';
import { languageState } from '../../recoil/atom';

const CamRecorder = () => {
    const selectedLanguage = useRecoilValue(languageState);
    const translations = languageData[selectedLanguage];
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <main className={styles.container}>
                <CustomLogoImage
                    src="assets/netwin_logo.svg"
                    alt="Netwin Logo"
                    className={styles.logo}
                />
                <section className={styles.contentWrapper}>
                    <p className={styles.instructionText}>
                        {translations.followInstructionsForRecording}
                    </p>
                    <InstructionBox translations={translations} />
                    <VideoRecorder />
                    <RecordButton translations={translations} />
                </section>
            </main>
        </>
    )
}

export default CamRecorder;