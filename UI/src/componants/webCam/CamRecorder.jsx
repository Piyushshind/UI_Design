import React from 'react'
import CustomLogoImage from '../company_logo/CustomLogoImage'
import styles from "./CamRecorder.module.css";
import InstructionBox from './InstructionBox';
import VideoRecorder from './VideoRecorder';
import RecordButton from './RecordButton';

const CamRecorder = () => {
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
                        Record a video while following the instructions displayed on your
                        screen.
                    </p>
                    <InstructionBox />
                    <VideoRecorder />
                    <RecordButton />
                </section>
            </main>
        </>
    )
}

export default CamRecorder;