import { useRef, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { recordingButtonEnableState, isValidHumanFaceDetectedState, setPreRecordingErrorMessageState, languageState } from '../recoil/atom.js';
import { isValidHumanFace } from '../methods/isValidHumanFace';
import * as faceapi from 'face-api.js';
import { languageData } from '../recoil/LanguageData/translations.js';

const useFaceDetection = (webcamRef) => {
    const setPreRecordingErrorMessage = useSetRecoilState(setPreRecordingErrorMessageState)
    const modelsLoadedRef = useRef(false);
    const isComponantMount = useRef(true);
    const setIsRecordingButtonEnabled = useSetRecoilState(recordingButtonEnableState);
    const setIsValidHumanFaceDetected = useSetRecoilState(isValidHumanFaceDetectedState);
    const selectedLanguage = useRecoilValue(languageState);
    const translations = languageData[selectedLanguage];

    useEffect(() => {
        return () => {
            isComponantMount.current = false;
        }
    }, [])


    const startPreRecordingCheck = () => {
        let detectionCount = 0;
        let stopDetection = false;
        setPreRecordingErrorMessage('');
        // console.log("startPreRecordingCheck is running ");
        const detectionInterval = setInterval(async () => {
            // console.log("detectionInterval is running ");

            if (stopDetection) return;  // Stop detection if already successful

            const video = webcamRef.current?.video;
            if (!video) return;

            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
            if (detections.length > 0) {
                const landmarks = detections[0].landmarks;
                const isHuman = isValidHumanFace(landmarks);

                // console.log("detectionCount  :- ", detectionCount, "isValidHumanFace :- ", isHuman);
                if (isHuman) {
                    detectionCount++;
                }
            }

            if (detectionCount > 3) {
                stopDetection = true;
                clearInterval(detectionInterval);
                setIsValidHumanFaceDetected(true);
                setIsRecordingButtonEnabled(true);
                // console.log("Face detected successfully, stopping detection.");
            }
        }, 600);

        setTimeout(() => {
            if (detectionCount <= 3) {
                clearInterval(detectionInterval);
                if (isComponantMount.current) {
                    setIsValidHumanFaceDetected(false);
                    setPreRecordingErrorMessage(translations.noValidHumanFaceDetectedInTime);
                    console.log("No valid face detected in time.");
                }
            }
        }, 10000);
    };

    useEffect(() => {
        const loadModels = async () => {
            if (modelsLoadedRef.current) {
                return;
            }
            try {
                const MODELS_PATH = import.meta.env.VITE_APP_MODELS_PATH;
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri(MODELS_PATH),
                    faceapi.nets.faceLandmark68Net.loadFromUri(MODELS_PATH),
                ]);
                modelsLoadedRef.current = true;
                // console.log("Models loaded successfully.");
            } catch (error) {
                console.error("Error loading face-api.js models", error);
            }
        };

        loadModels();
    }, []);

    return { startPreRecordingCheck };
};

export default useFaceDetection;
