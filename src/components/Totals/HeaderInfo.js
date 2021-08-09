import React from "react";
import styles from "./Totals.module.css";

function HeaderInfo() {

    return (
        <>
            <tr>
                <th className={styles.headerThree}>Tapverlies Berekening</th>
                <th className={styles.headerThreeEmpty} colSpan={2}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty} colSpan={2}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty} colSpan={2}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
            </tr>
        </>
    );
}

export default HeaderInfo;