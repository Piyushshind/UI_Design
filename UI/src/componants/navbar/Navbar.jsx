"use client";
import React from "react";
import styles from "./Navbar.module.css";
import LanguageSelector from "./LanguageSelector";
import CustomLogoImage from "../company_logo/CustomLogoImage";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <CustomLogoImage src={`${import.meta.env.VITE_APP_ASSETS_PATH}netwin_logo.svg`} alt="Netwin Logo" className={styles.logo} />
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;
