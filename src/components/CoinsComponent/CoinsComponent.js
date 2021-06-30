import React from "react";
import styles from "./CoinsComponent.module.css";

function CoinsComponent({disabled, setCoins, coins}) {

    return (
        <>


            <div className={styles["container-table"]}>
            <table border="2">
                <thead>
                <tr>
                    <th className={styles.headerOne}>Munten</th>
                    <th className={styles.headerOne}>Totaal</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Munten</td>
                    <td><input value={coins} type="number" placeholder="0" onChange={(event) => setCoins(event.target.value)} disabled={disabled}/></td>
                </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default CoinsComponent