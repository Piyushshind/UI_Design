import { useState } from "react";
import { useRecoilState } from "recoil";
import checkForMediaAccess from "./checkForMediaAccess"; // Your combined function for camera and mic access check
import { permissionsState } from "../recoil/atom";

const useMediaPermissions = () => {
    const [permissionsGranted, setPermissionsGranted] = useRecoilState(permissionsState);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to check permissions
    const checkPermissions = async () => {
        const { cameraGranted, microphoneGranted } = await checkForMediaAccess();

        if (cameraGranted && microphoneGranted) {
            setPermissionsGranted(true);
        } else {
            setPermissionsGranted(false);
            setIsDialogOpen(true); // Open the error dialog if permissions are denied
        }
    };

    // Retry function to ask for permissions again
    const retryPermissions = async () => {
        setIsDialogOpen(false); // Close the dialog when retrying
        await checkPermissions(); // Retry permission check
    };

    return {
        permissionsGranted,
        checkPermissions,
        retryPermissions,
        isDialogOpen,
        setIsDialogOpen, // Expose function to control the dialog state (for AlertDialog)
    };
};

export default useMediaPermissions;
