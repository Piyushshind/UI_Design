import React, { useRef, useState } from 'react'
import CustomLogoImage from '../company_logo/CustomLogoImage'
import styles from "./CamRecorder.module.css";
import InstructionBox from './InstructionBox';
import VideoRecorder from './VideoRecorder';
import RecordButton from './RecordButton';
import { useRecoilValue } from 'recoil';
import { languageData } from '../../recoil/LanguageData/translations';
import { activateWebCamState, languageState, recordingButtonEnableState } from '../../recoil/atom';
import { useRecording } from '../../hooks/useRecording';
import TimeRemainingStatus from './TimeRemainingStatus';
import { LoadingSpinner } from '../Loader/LoadingSpinner';
import useFaceDetection from '../../hooks/useFaceDetection';

const CamRecorder = () => {
    const webcamRef = useRef();
    const selectedLanguage = useRecoilValue(languageState);
    const translations = languageData[selectedLanguage];
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const [isRecorderbuttonClicked, setIsRecorderbuttonClicked] = useState(false);
    const { startPreRecordingCheck } = useFaceDetection(webcamRef);

    // const isWebcamActive = useRecoilValue(activateWebCamState);
    const isRecordingButtonEnabled = useRecoilValue(recordingButtonEnableState);
    const { startRecording, videoBlob, isProcessing, timeRemaining } = useRecording(webcamRef, generatedOtp);
    const isRecordingStarted = false;
    const handleRecordClick = () => {
        setGeneratedOtp(Math.floor(100000 + Math.random() * 900000).toString())
        setIsRecorderbuttonClicked(true);
        startRecording()
    }


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
                    {
                        isProcessing ? (<LoadingSpinner />) :
                            (
                                <>
                                    <p className={styles.instructionText}>
                                        {isRecordingButtonEnabled ? translations.speakOutLoud : translations.followInstructionsForRecording}
                                    </p>
                                    <InstructionBox translations={translations} generatedOtp={generatedOtp} startPreRecordingCheck={startPreRecordingCheck} />
                                    {/* <h3>timeRemaining :- {timeRemaining}</h3> */}
                                    {/* {isProcessing && <h1>Loading ...</h1>} */}
                                    <VideoRecorder webcamRef={webcamRef} startPreRecordingCheck={startPreRecordingCheck} />
                                    {/* {isWebcamActive ? <VideoRecorder /> : " "} */}
                                    {isRecorderbuttonClicked ? <TimeRemainingStatus /> : <RecordButton translations={translations} isEnabled={isRecordingButtonEnabled} onClick={handleRecordClick} />}
                                </>
                            )
                    }
                </section>
            </main>
        </>
    )
}

export default CamRecorder;