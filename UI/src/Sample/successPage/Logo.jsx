import React from "react";
import styles from "./LogoContainer.module.css";

function Logo() {
  return (
    <header className={styles.logoContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/74136ccedf5ef038047d0276d296549d00b6016c"
        alt="Logo"
        className={styles.logo}
      />
    </header>
  );
}

export default Logo;
