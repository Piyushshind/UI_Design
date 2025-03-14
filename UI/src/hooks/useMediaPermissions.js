import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import checkForMediaAccess from "../methods/checkForMediaAccess";
import { permissionsState, windowWidthState } from "../recoil/atom";

const useMediaPermissions = (storeCoordinates) => {
    const windowWidth = useRecoilValue(windowWidthState);
    const isMobile = windowWidth <= 991;
    const [permissionsGranted, setPermissionsGranted] = useRecoilState(permissionsState);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const checkPermissions = async (callback) => {
        const { cameraGranted, microphoneGranted, isGpsAvailable } = await checkForMediaAccess(storeCoordinates);

        if (cameraGranted && microphoneGranted && isGpsAvailable) {
            setPermissionsGranted(true);
            callback(true)
        } else {
            setPermissionsGranted(false);
            setIsDialogOpen(true);
            callback(false)
        }
    };

    const retryPermissions = async (callback) => {
        setIsDialogOpen(false);
        await checkPermissions(callback);
    };


    return {
        isMobile,
        permissionsGranted,
        checkPermissions,
        retryPermissions,
        isDialogOpen,
        setIsDialogOpen,
    };
};

export default useMediaPermissions;
