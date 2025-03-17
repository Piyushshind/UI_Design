import React from 'react'
import styles from "./VerificationContent.module.css";
import Carousel from './Carousel';
import CustomButton from '../buttons/CustomButton';
import useMediaPermissions from '../../hooks/useMediaPermissions';
import AlertDialog from '../dialogueBox/AlertDialog';
import { useStoreCoordinates } from '../../hooks/useStoreCoordinates';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { activateWebCamState } from '../../recoil/atom';

const VerificationIllustrationCarousel = () => {
    const storeCoordinates = useStoreCoordinates();
    const setIsWebcamActive = useSetRecoilState(activateWebCamState);

    const navigate = useNavigate();

    const { isMobile, checkPermissions, retryPermissions, isDialogOpen, setIsDialogOpen } = useMediaPermissions(storeCoordinates);

    const handleContinueClick = async () => {
        await checkPermissions((permission) => {
            console.log("permissionsGranted :- ", permission);
            if (!permission) return
            // console.log("navigated ........");
            setIsWebcamActive(true);
            navigate("/webcam")
        })
    }
    const handleRetryPermissions = async () => {
        retryPermissions((callback) => {
            console.log("retrying for permissions .. ", callback);
        })
    }
    return (
        <>
            <aside className={styles.illustrationColumn}>
                <Carousel />
                {isMobile ? <CustomButton onClick={handleContinueClick} className={styles.continueButton} btnContent={"Continue"} /> : null}
            </aside>

            <AlertDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title="Permissions Error"
                message="Please check your browser settings and manually enable camera and microphone permissions if the pop-up does not appear."
                primaryAction={{
                    label: "Retry for Permissions",
                    onClick: handleRetryPermissions,
                }}
                secondaryAction={{
                    label: "Cancel",
                    onClick: () => setIsDialogOpen(false),
                }}
            />
        </>
    )
}

export default VerificationIllustrationCarousel;
