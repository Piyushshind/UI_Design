"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./LanguageSelector.module.css";
import { useRecoilState } from "recoil";
import { languageState } from "../../recoil/atom";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(languageState);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSelector} ref={dropdownRef}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8b66844651b44a489c194c6e646c2609/c7764600a11fa6cb5a043861a0140b9d3eb93fd5e85a20371dd63c6dc8b0d66d?placeholderIfAbsent=true"
          alt="Language Selection"
          className={styles.languageIcon}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <button
            className={`${styles.option} ${
              selectedLanguage === "english" ? styles.selected : ""
            }`}
            onClick={() => handleLanguageSelect("english")}
          >
            English
          </button>
          <button
            className={`${styles.option} ${
              selectedLanguage === "hindi" ? styles.selected : ""
            }`}
            onClick={() => handleLanguageSelect("hindi")}
          >
            हिंदी
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
