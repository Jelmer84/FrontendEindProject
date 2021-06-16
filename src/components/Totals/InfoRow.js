import React from "react";
import styles from "./Totals.module.css";

function InfoRow({titleOne, titleTwo, titleThree, calculationOne, calculationTwo, calculationThree}) {

    return (<>
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


// <tr>
//     <td className={styles.text}>{title}</td>
//     <td className={styles.calculations}>{crateContent[beverage]}</td>
//     <td className={styles.calculations}>{bottleContent[beverage]}</td>
//     <td className={styles.calculations}>{totals.before.totalCrates[beverage]}</td>
//     <td className={styles.calculations}>{totals.before.totalBottles[beverage]}</td>
//     <td className={styles.calculations}>{(crateContent[beverage] * totals.before.totalCrates[beverage]).toFixed(1)}</td>
//     <td className={styles.calculations}>{(bottleContent[beverage] * totals.before.totalBottles[beverage]).toFixed(1)}</td>
//     <td className={styles.calculations}>{((crateContent[beverage] * totals.before.totalCrates[beverage]) + (bottleContent[beverage] * totals.before.totalBottles[beverage])).toFixed(1)}</td>
//     <td className={styles.calculations}>{totals.after.totalCrates[beverage]}</td>
//     <td className={styles.calculations}>{totals.after.totalBottles[beverage]}</td>
//     <td className={styles.calculations}>{(crateContent[beverage] * totals.after.totalCrates[beverage]).toFixed(1)}</td>
//     <td className={styles.calculations}>{(bottleContent[beverage] * totals.after.totalBottles[beverage]).toFixed(1)}</td>
//     <td className={styles.calculations}>{((crateContent[beverage] * totals.after.totalCrates[beverage]) + (bottleContent[beverage] * totals.after.totalBottles[beverage])).toFixed(1)}</td>
//     <td className={styles.calculations}>{((crateContent[beverage] * totals.before.totalCrates[beverage]) - (crateContent[beverage] * totals.after.totalCrates[beverage])).toFixed(1)}</td>
//     <td className={styles.calculations}>{(bottleContent[beverage] * totals.before.totalBottles[beverage] - bottleContent[beverage] * totals.after.totalBottles[beverage]).toFixed(1)}</td>
//     <td className={styles.calculations}>{(((crateContent[beverage] * totals.before.totalCrates[beverage]) + (bottleContent[beverage] * totals.before.totalBottles[beverage])) - ((crateContent[beverage] * totals.after.totalCrates[beverage]) + (bottleContent[beverage] * totals.after.totalBottles[beverage]))).toFixed(1)}</td>
//     <td className={styles.calculations}>{((((crateContent[beverage] * totals.before.totalCrates[beverage]) + (bottleContent[beverage] * totals.before.totalBottles[beverage])) - ((crateContent[beverage] * totals.after.totalCrates[beverage]) + (bottleContent[beverage] * totals.after.totalBottles[beverage]))) * drinksPerLiter[beverage]).toFixed(1)}</td>
//     <td className={styles.calculations}>{(((((crateContent[beverage] * totals.before.totalCrates[beverage]) + (bottleContent[beverage] * totals.before.totalBottles[beverage])) - ((crateContent[beverage] * totals.after.totalCrates[beverage]) + (bottleContent[beverage] * totals.after.totalBottles[beverage]))) * drinksPerLiter[beverage]) * coinsPerConsumption[beverage]).toFixed(0)}</td>
// </tr>