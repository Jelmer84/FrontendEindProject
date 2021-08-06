//import data from "../../helpers/fakeData/combined.json";
import calculateCrateBottleTotals from "../../helpers/calculateBeverageTotals/calculateCrateBottleTotals";

// deze functie wil uiteindelijk graag de data als argumenten ontvangen, niet uit json data
export function createCrateBottleData(data) {
    // alles destructuren en hernoemen, want we hebben veel dezelfde keys.
    // Ik ga ervanuit dat deze functie het object met één voor- en natelling ontvangt van een evenement
    const { before:
        { totalBottles: totalBeforeBottles, totalCrates: totalBeforeCrates  }, after: { totalBottles: totalAfterBottles, totalCrates: totalAfterCrates }} = data;


    // Hoeveel drankjes je ook hebt, ik zet ze hier als namen in een array
    const beverageNames = Object.keys(totalBeforeBottles);

    // We loopen over alle dranknamen, en voor iedere dranknaam halen we de bijbehorende data uit het voor- en natellings object
    // Zo creeeren we één array met objecten erin die alle tellingen per drankje bevat!
    return beverageNames.map((beverage) => {
        // bereken alle data over deze drank (we krijgen een object terug)
        const result = calculateCrateBottleTotals(beverage, totalBeforeCrates[beverage], totalBeforeBottles[beverage], totalAfterCrates[beverage], totalAfterBottles[beverage]);

        // console.log(result.totalDrinks)

        // voeg alle data, rauw en berekend samen in een object
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