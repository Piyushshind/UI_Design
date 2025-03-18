import { checkAndStoreGpsAvailability } from "./checkAndStoreGpsAvailability";

const checkForMediaAccess = async (storeCoordinates) => {
    // console.log("retrying ...............");

    try {
        const isGpsAvailable = await checkAndStoreGpsAvailability(storeCoordinates);
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: { facingMode: "user" } });
        stream.getTracks().forEach(track => track.stop());
        return { cameraGranted: true, microphoneGranted: true, isGpsAvailable: isGpsAvailable };
    } catch (error) {
        console.error("Error accessing media:", error);

        let cameraGranted = false;
        let microphoneGranted = false;

        if (error.name === "NotAllowedError") {
            alert("You need to grant camera and microphone access. Please allow access in your browser settings.");
        } else if (error.name === "OverconstrainedError") {
            alert("The camera or microphone is currently in use by another application. Please close the other application and try again.");
        } else if (error.name === "NotFoundError") {
            alert("No media devices found. Please make sure your camera and microphone are properly connected.");
        } else {
            alert("An unknown error occurred while accessing media. Please try again later.");
        }

        if (error.name === "NotAllowedError" || error.name === "OverconstrainedError" || error.name === "NotFoundError") {
            if (error.message.toLowerCase().includes("camera")) cameraGranted = false;
            if (error.message.toLowerCase().includes("microphone")) microphoneGranted = false;
        }

        return { cameraGranted, microphoneGranted, isGpsAvailable };
    }
};

export default checkForMediaAccess;
