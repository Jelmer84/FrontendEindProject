import React from "react";
import styles from "./Totals.module.css";

function BeverageRow({
                         name,
                         literCrate,
                         literBottle,
                         beforeCrates,
                         beforeBottles,
                         countCrateLitersBefore,
                         countBottleLitersBefore,
                         differenceLitersBefore,
                         afterCrates,
                         afterBottles,
                         countCrateLitersAfter,
                         countBottleLitersAfter,
                         differenceLitersAfter,
                         differenceCratesTotal,
                         differenceBottlesTotal,
                         differenceTotal,
                         totalDrinks,
                         totalCoins
                     }) {

    return (
        <tr>
            <td className={styles.text}>{name}</td>
            <td className={styles.calculations}>{literCrate}</td>
            <td className={styles.calculations}>{literBottle}</td>
            <td className={styles.calculations}>{beforeCrates}</td>
            <td className={styles.calculations}>{beforeBottles}</td>
            <td className={styles.calculations}>{countCrateLitersBefore.toFixed(1)}</td>
            <td className={styles.calculations}>{countBottleLitersBefore.toFixed(1)}</td>
            <td className={styles.calculations}>{differenceLitersBefore.toFixed(1)}</td>
            <td className={styles.calculations}>{afterCrates}</td>
            <td className={styles.calculations}>{afterBottles}</td>
            <td className={styles.calculations}>{countCrateLitersAfter.toFixed(1)}</td>
            <td className={styles.calculations}>{countBottleLitersAfter.toFixed(1)}</td>
            <td className={styles.calculations}>{differenceLitersAfter.toFixed(1)}</td>
            <td className={styles.calculations}>{differenceCratesTotal.toFixed(1)}</td>
            <td className={styles.calculations}>{differenceBottlesTotal.toFixed(1)}</td>
            <td className={styles.calculations}>{differenceTotal.toFixed(1)}</td>
            <td className={styles.calculations}>{totalDrinks.toFixed(1)}</td>
            <td className={styles.calculations}>{totalCoins.toFixed(1)}</td>
        </tr>
    );
}

export default BeverageRow;