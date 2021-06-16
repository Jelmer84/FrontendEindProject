import React from "react";
import styles from "./Totals.module.css";

function BeverageRow(
    {
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
    }
) {
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


// import React, {useEffect} from "react";
// import combined from "./dataBeforeCount/combined.json";
// import styles from "../../Totals/Totals.module.css";
// import calculateTotals from "../../helpers/calculateTotals";
//
// function BeverageRow({title, beverage, catchValueDrinks}) {
//
//     const crateContent = {
//         Water_Rood: 13.2,
//         Water_Blauw: 13.2,
//         Pepsi: 13.2,
//         Pepsi_Max: 13.2,
//         Sisi: 13.2,
//         Ice_Tea_Normal: 13.2,
//         Ice_Tea_Green_110cl: 13.2,
//         Ice_Tea_Green_150cl: 18,
//         Red_Bull: 6,
//         Red_Bull_Sugar_Free: 6,
//         Red_Bull_Tropical: 3,
//         Desperados: 7.92
//     }
//
//     const bottleContent = {
//         Water_Rood: 1.1,
//         Water_Blauw: 1.1,
//         Pepsi: 1.1,
//         Pepsi_Max: 1.1,
//         Sisi: 1.1,
//         Ice_Tea_Normal: 1.1,
//         Ice_Tea_Green_110cl: 1.1,
//         Ice_Tea_Green_150cl: 1.5,
//         Red_Bull: 0.25,
//         Red_Bull_Sugar_Free: 0.25,
//         Red_Bull_Tropical: 0.25,
//         Desperados: 0.33
//     }
//
//     const drinksPerLiter = {
//         Desperados: 3,
//         Ice_Tea_Green_110cl: 5,
//         Ice_Tea_Green_150cl: 5,
//         Ice_Tea_Normal: 5,
//         Pepsi: 5,
//         Pepsi_Max: 5,
//         Red_Bull: 4,
//         Red_Bull_Sugar_Free: 4,
//         Red_Bull_Tropical: 4,
//         Sisi: 5,
//         Water_Blauw: 5,
//         Water_Rood: 5,
//     }
//     const coinsPerConsumption = {
//         Desperados: 2,
//         Ice_Tea_Green_110cl: 1,
//         Ice_Tea_Green_150cl: 1,
//         Ice_Tea_Normal: 1,
//         Pepsi: 1,
//         Pepsi_Max: 1,
//         Red_Bull: 1.5,
//         Red_Bull_Sugar_Free: 1.5,
//         Red_Bull_Tropical: 1.5,
//         Sisi: 1,
//         Water_Blauw: 1,
//         Water_Rood: 1,
//     }
//
//
//     // useEffect(() => {catchValueDrinks(totalDrinks)
//     //     console.log('Is dit wat je bedoelt?');
//     // }, []);
//
//     console.log(calculateTotals({beverage}, {countCrateBefore},15,10,5))
//
//
//     return (<React.Fragment key={title}>
//             {combined.map((totals) => {
//                 const calCrateLiters = crateContent[beverage];
//                 const calBottleLiters = bottleContent[beverage];
//
//                 const countCrateBefore= totals.before.totalCrates[beverage];
//                 const countBottleBefore = totals.before.totalBottles[beverage];
//                 const countCrateLitersBefore = calCrateLiters * countCrateBefore;
//                 const countBottleLitersBefore = calBottleLiters * countBottleBefore;
//                 const differenceLitersBefore = (calCrateLiters * countCrateBefore) + (calBottleLiters * countBottleBefore);
//
//                 const countCrateAfter= totals.after.totalCrates[beverage];
//                 const countBottleAfter = totals.after.totalBottles[beverage];
//                 const countCrateLitersAfter = calCrateLiters * countCrateAfter;
//                 const countBottleLitersAfter = calBottleLiters * countBottleAfter;
//                 const differenceLitersAfter = (calCrateLiters * countCrateAfter) + (calBottleLiters * countBottleAfter);
//
//
//                 const totalDrinks = (differenceLitersBefore - differenceLitersAfter) * drinksPerLiter[beverage];
//                 const totalCoins =  ((differenceLitersBefore - differenceLitersAfter) * drinksPerLiter[beverage]) * coinsPerConsumption[beverage];
//
//
//
//                 return <tr key={title}>
//                     <td className={styles.text}>{title}</td>
//                     <td className={styles.calculations}>{calCrateLiters}</td>
//                     <td className={styles.calculations}>{calBottleLiters}</td>
//                     <td className={styles.calculations}>{countCrateBefore}</td>
//                     <td className={styles.calculations}>{countBottleBefore}</td>
//                     <td className={styles.calculations}>{countCrateLitersBefore.toFixed(1)}</td>
//                     <td className={styles.calculations}>{countBottleLitersBefore.toFixed(1)}</td>
//                     <td className={styles.calculations}>{differenceLitersBefore.toFixed(1)}</td>
//                     <td className={styles.calculations}>{countCrateAfter}</td>
//                     <td className={styles.calculations}>{countBottleAfter}</td>
//                     <td className={styles.calculations}>{countCrateLitersAfter.toFixed(1)}</td>
//                     <td className={styles.calculations}>{countBottleLitersAfter.toFixed(1)}</td>
//                     <td className={styles.calculations}>{differenceLitersAfter.toFixed(1)}</td>
//                     <td className={styles.calculations}>{(countCrateLitersBefore - countCrateLitersAfter).toFixed(1)}</td>
//                     <td className={styles.calculations}>{(countBottleLitersBefore - countBottleLitersAfter).toFixed(1)}</td>
//                     <td className={styles.calculations}>{(differenceLitersBefore - differenceLitersAfter).toFixed(1)}</td>
//                     <td className={styles.calculations}>{totalDrinks.toFixed(0)}xxx</td>
//                     <td className={styles.calculations}>{totalCoins.toFixed(0)}</td>
//
//                     {/*proberen met onLoad*/}
//
//                     <button onClick={() => catchValueDrinks(totalDrinks)}>Werkt dit</button>
//
//                 </tr>
//
//             })}
//
//         </React.Fragment>
//     );
// }
//
// export default BeverageRow;


