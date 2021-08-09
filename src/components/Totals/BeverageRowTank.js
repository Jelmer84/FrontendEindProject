import React from "react";
import styles from "./Totals.module.css";

function BeverageRowTank({
                             countTankLitersAfter,
                             countTankLitersBefore,
                             differenceTankTotal,
                             literTank,
                             name,
                             totalCoinsTanks,
                             totalDrinksTanks,
                         })
{

    return (
        <tr>
            <td className={styles.text}>{name}</td>
            <td className={styles.calculations}>{literTank}</td>
            <td className={styles.calculations}>{countTankLitersBefore}</td>
            <td className={styles.calculations}>{countTankLitersAfter}</td>
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
            <td className={styles.calculations}>{differenceTankTotal}</td>
            <td className={styles.calculations}>{totalDrinksTanks}</td>
            <td className={styles.calculations}>{totalCoinsTanks}</td>
        </tr>
    );
}

export default BeverageRowTank;