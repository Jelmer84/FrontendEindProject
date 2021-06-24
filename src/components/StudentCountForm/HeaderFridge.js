import React from "react";
import styles from "./StudentCountTable.module.css";

function HeaderFridge({fridge}) {

    return (
        <th className={styles.headerOne} colSpan="2">Koeling {fridge}</th>
    )
}

export default HeaderFridge