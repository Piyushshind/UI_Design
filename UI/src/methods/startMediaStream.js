
export const getMimeType = () => {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIos) {
        return "video/mp4;codecs=h264,aac";
    } else {
        return "video/webm;codecs=vp8,opus";
    }
};

export const startMediaStream = async (webcamRef) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user", height: 720, width: 1080 },
            audio: true,
        });
        webcamRef.current.srcObject = stream;
        return stream;
    } catch (error) {
        console.error("Error accessing media devices:", error);
        alert("Could not access the webcam or microphone.");
    }
};
