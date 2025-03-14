export const isValidHumanFace = (landmarks) => {
    try {
        const leftEye = landmarks.getLeftEye();
        const rightEye = landmarks.getRightEye();
        const nose = landmarks.getNose();
        const mouth = landmarks.getMouth();
        const jawOutline = landmarks.getJawOutline();
        const rightEyebrow = landmarks.getRightEyeBrow();
        const leftEyebrow = landmarks.getLeftEyeBrow();

        if (!leftEye || !rightEye || !nose || !mouth || !jawOutline || !rightEyebrow || !leftEyebrow) {
            return false;
        }

        const eyeDistance = Math.abs(leftEye[0].x - rightEye[0].x);
        const noseMouthDistance = Math.abs(nose[3].y - mouth[7].y);
        const jawWidth = Math.abs(jawOutline[0].x - jawOutline[16].x);
        const eyebrowDistance = Math.abs(leftEyebrow[3].x - rightEyebrow[3].x);
        const faceSize = (jawWidth + eyeDistance) / 2;

        const isValidProportion = (
            eyeDistance > 60 &&
            noseMouthDistance > 40 &&
            jawWidth > 140 &&
            eyebrowDistance > 70 &&
            faceSize > 100
        );

        const isEyesVisible = leftEye && rightEye && leftEye.length > 0 && rightEye.length > 0;
        const isNoseVisible = nose && nose.length > 0;
        const isMouthVisible = mouth && mouth.length > 0;

        return isValidProportion && (isEyesVisible || isNoseVisible || isMouthVisible);
    } catch (error) {
        console.error('Error during face validation:', error);
        return false;
    }
};