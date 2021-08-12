import React from "react";
import styles from "./Totals.module.css";

function InfoRow({titleOne, titleTwo, titleThree, calculationOne, calculationTwo, calculationThree}) {

    return (
        <>
            <tr key={titleOne}>
                <td className={styles.text}>{titleOne}</td>
                <td className={styles.text} colSpan={2}>{calculationOne}</td>
                <td className={styles.text}></td>
                <td className={styles.text} colSpan={2}>{titleTwo}</td>
                <td className={styles.text}>{calculationTwo}</td>
                <td className={styles.text}></td>
                <td className={styles.text} colSpan={2}>{titleThree}</td>
                <td className={styles.text}>{calculationThree}</td>
            </tr>
        </>
    );
}

export default InfoRow;
