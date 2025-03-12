const checkForMicrophoneAccess = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(track => track.stop());
        return true; 
    } catch (error) {
        console.error("Error accessing microphone:", error);

        if (error.name === "NotAllowedError") {
            alert("You need to grant microphone access. Please allow the microphone in your browser settings.");
        } else if (error.name === "NotFoundError") {
            alert("No microphone device found. Please make sure your microphone is properly connected.");
        } else {
            alert("An unknown error occurred while accessing the microphone. Please try again later.");
        }
        return false; 
    }
};
export default checkForMicrophoneAccess;
