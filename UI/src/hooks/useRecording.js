import { useState, useRef, useEffect } from "react";
import { getMimeType, startMediaStream } from "../methods/startMediaStream";
import { postVideoData } from "../api/postVideoData";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { activateWebCamState, authState, gpsCoordinatesState } from "../recoil/atom";
import { useNavigate } from "react-router-dom";

export const useRecording = (webcamRef, generatedOtp) => {

    const navigate = useNavigate();
    const [videoBlob, setVideoBlob] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(10);
    const mediaRecorderRef = useRef(null);
    const gpsCoordinates = useRecoilValue(gpsCoordinatesState);
    const [authStateObj, setAuthStateObj] = useRecoilState(authState);
    const setIsRecording = useSetRecoilState(activateWebCamState);


    const startRecording = async () => {
        const stream = await startMediaStream(webcamRef);
        if (!stream) return;


        const mimeType = getMimeType();
        const mediaRecorder = new MediaRecorder(stream, {
            mimeType,
            audioBitsPerSecond: 256000,
        });
        mediaRecorderRef.current = mediaRecorder;

        const chunks = [];
        mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) chunks.push(e.data);
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: "video/webm" });
            setVideoBlob(blob);
            setIsRecording(false);
            stream.getTracks().forEach((track) => track.stop());

        };

        mediaRecorder.start();

        let countdown = 10;
        const timer = setInterval(() => {
            countdown--;
            setTimeRemaining(countdown);
            if (countdown === 0) {
                // console.log("mediaRecorder stoped ", videoBlob);

                mediaRecorder.stop();
                clearInterval(timer);

            }
        }, 1000);
    };

    useEffect(() => {
        if (videoBlob) {
            handlePostVideoData(videoBlob);
        }
    }, [videoBlob])

    const handlePostVideoData = async (videoBlob) => {
        // console.log("handlePostVideoData called ..");

        setIsProcessing(true);
        try {

            const response = await postVideoData(videoBlob, gpsCoordinates, authStateObj, generatedOtp);
            setIsProcessing(false);

            setAuthStateObj(prevState => ({
                ...prevState,
                usedCount: 1 + Number(prevState.usedCount) 
            }));

            if (response.verified) {
                // alert("Your verification was successful! ✅");
                navigate("/success", { replace: true })


            } else {
                // alert("Verification not successful. Please try again. 🔄");
                navigate("/fail", { state: { response: response }, replace: true });
            }
        } catch (error) {
            setIsProcessing(false);
            alert(`Error: ${error.message}`);
            navigate("*", { replace: true })
        }
    };

    return { startRecording, videoBlob, isProcessing, timeRemaining };
};
