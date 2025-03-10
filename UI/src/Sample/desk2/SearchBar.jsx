import React from "react";
import styles from "./SearchBar.module.css";
import BrowserControls from "./BrowserControls";

function SearchBar() {
  return (
    <header className={styles.searchBar}>
      <BrowserControls />
    </header>
  );
}

export default SearchBar;
