import React from "react";
import styles from "./InputDesign.module.css";
import { GoogleIcon, BrowserControls } from "./Icons";

function BrowserHeader() {
  return (
    <header className={styles.searchBar}>
      <div className={styles.searchLeft}>
        <div className={styles.searchIcons}>
          <div className={styles.iconGroup}>
            <i className={styles.i} />
            <i className={styles.i} />
          </div>
          <div className={styles.iconGroup}>
            <i className={styles.i} />
            <i className={styles.i} />
          </div>
        </div>
        <div className={styles.searchInput}>
          <p className={styles.urlText}>
            https://financewebloan.drutam.in/apply/personalloan
          </p>
        </div>
      </div>
      <div>
      </div>
    </header>
  );
}

export default BrowserHeader;
