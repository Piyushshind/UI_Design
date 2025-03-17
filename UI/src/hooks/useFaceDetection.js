import { useState, useRef, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { recordingButtonEnableState, isValidHumanFaceDetectedState, setFaceDetectionWarnningsMassageState } from '../recoil/atom.js';
import { isValidHumanFace } from '../methods/isValidHumanFace';
import * as faceapi from 'face-api.js';

const useFaceDetection = (webcamRef) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const modelsLoadedRef = useRef(false);
    const isComponantMount = useRef(true);
    const setIsRecordingButtonEnabled = useSetRecoilState(recordingButtonEnableState);
    const setIsValidHumanFaceDetected = useSetRecoilState(isValidHumanFaceDetectedState);
    const setFaceDetectionWarnningsMassage = useSetRecoilState(setFaceDetectionWarnningsMassageState);



    useEffect(() => {
        return () => {
            isComponantMount.current = false;
        }
    }, [])


    const startPreRecordingCheck = () => {
        let detectionCount = 0;
        let stopDetection = false;

        const detectionInterval = setInterval(async () => {
            // console.log("detectionInterval is running ");

            if (stopDetection) return;  // Stop detection if already successful

            const video = webcamRef.current?.video;
            if (!video) return;

            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
            if (detections.length > 0) {
                const landmarks = detections[0].landmarks;
                const isHuman = isValidHumanFace(landmarks);

                // console.log("detectionCount  ;- ", detectionCount, "isValidHumanFace :- ", isHuman);
                if (isHuman) {
                    detectionCount++;
                }
            }

            if (detectionCount > 5) {
                stopDetection = true;
                clearInterval(detectionInterval);
                setIsValidHumanFaceDetected(true);
                setIsRecordingButtonEnabled(true);
                // console.log("Face detected successfully, stopping detection.");
            }
        }, 1000);

        setTimeout(() => {
            if (detectionCount <= 5) {
                clearInterval(detectionInterval);
                if (isComponantMount.current) {
                    setIsValidHumanFaceDetected(false);
                    setErrorMessage("No valid human face detected. Please try again.");
                    console.log("No valid face detected in time.");
                }
            }
        }, 30000);
    };

    useEffect(() => {
        const loadModels = async () => {
            if (modelsLoadedRef.current) {
                // console.log("Models already loaded, skipping load.");
                return;
            }
            try {
                await Promise.all([
                    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
                    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
                ]);
                modelsLoadedRef.current = true;
                // console.log("Models loaded successfully.");
            } catch (error) {
                console.error("Error loading face-api.js models", error);
            }
        };

        loadModels();
    }, []);

    return { startPreRecordingCheck, errorMessage };
};

export default useFaceDetection;
