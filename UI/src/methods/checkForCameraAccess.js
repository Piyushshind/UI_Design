const checkForCameraAccess = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        stream.getTracks().forEach(track => track.stop());
        return true; 
    } catch (error) {
        console.error("Error accessing camera:", error);

        if (error.name === "NotAllowedError") {
            alert("You need to grant camera access. Please allow the camera in your browser settings.");
        } else if (error.name === "OverconstrainedError") {
            alert("The camera is being used by another tab or application. Please close the other tab or application and try again.");
        } else if (error.name === "NotFoundError") {
            alert("No camera device found. Please make sure your camera is properly connected.");
        } else {
            alert("An unknown error occurred while accessing the camera. Please try again later.");
        }
        return false; 
    }
};
export default checkForCameraAccess;