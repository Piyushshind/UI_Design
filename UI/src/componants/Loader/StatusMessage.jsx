import React from "react";
import styles from "./LoadingSpinner.module.css";
import { languageData } from "../../recoil/LanguageData/translations";
import { languageState } from "../../recoil/atom";
import { useRecoilValue } from "recoil";

export function StatusMessage() { // holdTight
    const selectedLanguage = useRecoilValue(languageState);
    const translations = languageData[selectedLanguage];
    const [line1, line2] = translations.livelinessInProgress.split("\n");

    return (
        <>
            <h1 className={styles.title}>
                {line1}
                <br />
                {line2}
            </h1>
            <p className={styles.subtitle}>{translations.holdTight}</p>
        </>
    );
}
