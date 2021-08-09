import React from "react";
import styles from "./StudentCountTable.module.css";

function HeaderBeers({title}) {

    return (
            <th className={styles.headerOne}>{title}</th>
    );
}

export default HeaderBeers