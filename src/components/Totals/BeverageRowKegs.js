import React from "react";
import styles from "./Totals.module.css";

function BeverageRowKegs(
    {
        name,
        differenceKegsTotal,
        literKeg,
        countKegLitersBefore,
        countKegLitersAfter,
        totalDrinksKegs,
        totalCoinsKegs,
    }
) {
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

// import React from "react";
// import styles from "../../Totals/Totals.module.css";
// import calculateTotals from "../../helpers/calculateTotals";
//
// function BeverageRow({title, beverage}) {
//     const kegContent = {
//         Fust_Jilz: 20,
//         Fust_Radler: 20,
//         Fust_Pils: 50
//     }
//
//     const drinksPerLiter = {
//         Fust_Jilz: 4.6,
//         Fust_Radler: 4.6,
//         Fust_Pils: 4.6
//     }
//     const coinsPerConsumption = {
//         Fust_Jilz: 1,
//         Fust_Radler: 1,
//         Fust_Pils: 1
//     }
//
//
//
//     return (<>
//             {combined.map((totals) => {
//                 const calKegLiters = kegContent[beverage];
//                 const countKegBefore= totals.before.totalKegs[beverage];
//                 const countKegAfter= totals.after.totalKegs[beverage];
//                 const differenceLiters = countKegBefore - countKegAfter;
//                 const totalDrinks = differenceLiters * drinksPerLiter[beverage];
//                 const totalCoins =  totalDrinks * coinsPerConsumption[beverage];
//
//                 return<tr>
//                     <td className={styles.text}>{title}</td>
//                     <td className={styles.calculations}>{calKegLiters}</td>
//                     <td className={styles.calculations}>{countKegBefore}</td>
//                     <td className={styles.calculations}>{countKegAfter}</td>
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
// export default BeverageRow;

