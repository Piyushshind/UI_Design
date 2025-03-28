import { isValidHumanFace } from './methods/isValidHumanFace.js';
import * as faceapi from "face-api.js";


const checkWebcamReady = (callback) => {
    const checkInterval = setInterval(() => {
        if (webcamRef.current?.video?.readyState === 4) {
            clearInterval(checkInterval);
            callback();
        } else {
            console.warn("Webcam not ready yet, retrying...");
        }
    }, 500);
};

const startPreRecordingCheck = (webcamRef) => {
    checkWebcamReady(() => {
        let detectionCount = 0;
        const detectionInterval = setInterval(async () => {
            const video = webcamRef.current?.video;
            if (!video) return;
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
            if (detections.length > 0) {
                const landmarks = detections[0].landmarks;
                const isHuman = isValidHumanFace(landmarks);

                if (isHuman) detectionCount++;
                console.log("detectionCount  ;- ", detectionCount, "isValidHumanFace :- ", isHuman);
            }
        }, 500);

        setTimeout(() => {
            clearInterval(detectionInterval);

            if (detectionCount > 3) {
                setIsRecordingButtonEnabled(true)
            } else {
                alert("No valid human face detected. Please try again.");
            }
        }, 5000);
    });
};


useEffect(() => {
    const loadModels = async () => {
        if (modelsLoadedRef.current) {
            console.log("Models already loaded, skipping load.");
            return;
        }
        try {
            await Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri('/Liveliness/models'),
                faceapi.nets.faceLandmark68Net.loadFromUri('/Liveliness/models'),
                faceapi.nets.faceExpressionNet.loadFromUri('/Liveliness/models'),
            ]);
            modelsLoadedRef.current = true;
            console.log("Models loaded successfully.");
        } catch (error) {
            console.error("Error loading face-api.js models", error);
            setErrorMessage("Error loading face detection models.");
        }
    };

    loadModels();
}, []);
