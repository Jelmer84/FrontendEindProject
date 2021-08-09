import React from "react";
import styles from "./Totals.module.css";

function HeaderBetween({title}) {

    return (
        <>
            <tr>
                <th className={styles.headerThree}>{title}</th>
                <th className={styles.headerThree}>Standaard ltr.</th>
                <th className={styles.headerThree}>Voor ltr.</th>
                <th className={styles.headerThree}>Na ltr.</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThreeEmpty}>X</th>
                <th className={styles.headerThree}>Verschil</th>
                <th className={styles.headerThree}>Drankjes</th>
                <th className={styles.headerThree}>Munten</th>
            </tr>
        </>
    );
}

export default HeaderBetween;