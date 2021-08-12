import React from "react";
import styles from "./Totals.module.css";

function BeverageRowKegs({
                             name,
                             differenceKegsTotal,
                             literKeg,
                             countKegLitersBefore,
                             countKegLitersAfter,
                             totalDrinksKegs,
                             totalCoinsKegs,
                         }) {

    return (
        <tr>
            <td className={styles.text}>{name}</td>
            <td className={styles.calculations}>{literKeg}</td>
            <td className={styles.calculations}>{countKegLitersBefore}</td>
            <td className={styles.calculations}>{countKegLitersAfter}</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.black}>X</td>
            <td className={styles.calculations}>{differenceKegsTotal}</td>
            <td className={styles.calculations}>{totalDrinksKegs.toFixed(0)}</td>
            <td className={styles.calculations}>{totalCoinsKegs.toFixed(0)}</td>
        </tr>
    );
}

export default BeverageRowKegs;
