//import data from "../../helpers/fakeData/combined.json";
import calculateTankTotals from "../calculateBeverageTotals/calculateTankTotals";



// deze functie wil uiteindelijk graag de data als argumenten ontvangen, niet uit json data
export function createTankData(data) {
    // alles destructuren en hernoemen, want we hebben veel dezelfde keys.
    // Ik ga ervanuit dat deze functie het object met één voor- en natelling ontvangt van een evenement
    const {before: {totalTanks: totalBeforeTanks}, after: {totalTanks: totalAfterTanks}} = data;

    const result = calculateTankTotals("Tankbier", totalBeforeTanks.Tankbier, totalAfterTanks.Tankbier);

    // console.log(result)


    // voeg alle data, rauw en berekend samen in een object
    return {
        name: "Tankbier",
        beforeTanks: totalBeforeTanks.Tankbier,
        afterTanks: totalAfterTanks.Tankbier,
        ...result,
    }
}