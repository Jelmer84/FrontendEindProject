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
                         }) {

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


// import React from "react";
// import combined from "./dataBeforeCount/combined.json";
// import styles from "../../Totals/Totals.module.css";
//
// function BeverageTank({title, beverage}) {
//     const tankContent = {Tankbier: 1000}
//     const drinksPerLiter = {Tankbier: 4.6}
//     const coinsPerConsumption = {Tankbier: 1}
//
//     return (<>
//             {combined.map((totals) => {
//                 const calTankLiters = tankContent[beverage];
//                 const countTankBefore= totals.before.totalTanks[beverage];
//                 const countTankAfter= totals.after.totalTanks[beverage];
//
//                 const differenceLiters = countTankBefore - countTankAfter;
//                 const totalDrinks = differenceLiters * drinksPerLiter[beverage];
//                 const totalCoins =  totalDrinks * coinsPerConsumption[beverage];
//
//                 return<tr key={title}>
//                     <td className={styles.text}>{title}</td>
//                     <td className={styles.calculations}>{calTankLiters}</td>
//                     <td className={styles.calculations}>{countTankBefore}</td>
//                     <td className={styles.calculations}>{countTankAfter}</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.black}>X</td>
//                     <td className={styles.calculations}>{differenceLiters}</td>
//                     <td className={styles.calculations}>{totalDrinks.toFixed(0)}</td>
//                     <td className={styles.calculations}>{totalCoins.toFixed(0)}</td>
//                 </tr>
//             })}
//         </>
//     );
// }
//
// export default BeverageTank;
//
