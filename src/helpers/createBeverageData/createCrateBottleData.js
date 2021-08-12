import calculateCrateBottleTotals from "../../helpers/calculateBeverageTotals/calculateCrateBottleTotals";

export function createCrateBottleData(data) {
    const {
        before:
            {
                totalBottles: totalBeforeBottles,
                totalCrates: totalBeforeCrates
            },
        after: {
            totalBottles: totalAfterBottles,
            totalCrates: totalAfterCrates
        }
    } = data;

    // alle drank namen in een array
    const beverageNames = Object.keys(totalBeforeBottles);

    // loop over de dranknamen, voor iedere dranknaam komt de bijbehorende data uit het voor- en natellings object. Resulteert in een 1 array met objecten die alle tellingen per drank bevat.
    return beverageNames.map((beverage) => {
        const result = calculateCrateBottleTotals(beverage, totalBeforeCrates[beverage], totalBeforeBottles[beverage], totalAfterCrates[beverage], totalAfterBottles[beverage]);

        return {
            name: beverage,
            beforeCrates: totalBeforeCrates[beverage],
            beforeBottles: totalBeforeBottles[beverage],
            afterCrates: totalAfterCrates[beverage],
            afterBottles: totalAfterBottles[beverage],
            ...result,
        }
    });
}