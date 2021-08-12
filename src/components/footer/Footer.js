import React from "react";
import styles from "./Footer.module.css"

function Footer() {

    return (
        <footer className={styles["footer-container"]}>
            <ul>
            <li className={styles.list}>© by Jelmer Dijxhoorn</li>
            </ul>
        </footer>
    );
}

export default Footer
