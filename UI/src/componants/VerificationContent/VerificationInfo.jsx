import React from 'react'
import styles from "./VerificationContent.module.css";
import CustomButton from '../buttons/CustomButton';
import { languageState } from '../../recoil/atom'
import { languageData } from '../../recoil/LanguageData/translations'
import useMediaPermissions from '../../hooks/useMediaPermissions';
import AlertDialog from '../dialogueBox/AlertDialog';
import { useRecoilValue } from 'recoil';
import { useStoreCoordinates } from '../../hooks/useStoreCoordinates';
import { useNavigate } from 'react-router-dom';

const VerificationInfo = () => {
    const navigate = useNavigate()
    const storeCoordinates = useStoreCoordinates();
    const selectedLanguage = useRecoilValue(languageState);
    const translations = languageData[selectedLanguage];
    const { isMobile, checkPermissions, retryPermissions, isDialogOpen, setIsDialogOpen } = useMediaPermissions(storeCoordinates);


    const handleContinueClick = async () => {
        await checkPermissions((permission) => {
            // console.log("permissionsGranted :- ", permission);
            if (!permission) return
            // console.log("navigated ........");
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
            <article className={styles.infoColumn}>
                <div className={styles.infoContent}>
                    <div className={styles.textContent}>
                        <div className={styles.textWrapper}>
                            <h1 className={styles.title}>
                                {translations.verificationMessage}
                            </h1>
                            <p className={styles.description}>
                                {translations.verificationRequired}
                            </p>
                        </div>
                    </div>
                    {!isMobile ? <CustomButton onClick={handleContinueClick} className={styles.continueButton} btnContent={translations.continue} /> : null}
                </div>
            </article>

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

export default VerificationInfo;