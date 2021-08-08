import calculateKegTotals from "../calculateBeverageTotals/calculateKegTotals";

export function createKegData(data) {
    // alles destructuren en hernoemen, want we hebben veel dezelfde keys.
    // Ik ga ervanuit dat deze functie het object met één voor- en natelling ontvangt van een evenement
    const { before: {totalKegs: totalBeforeKegs}, after: {totalKegs: totalAfterKegs }} = data;


    // Hoeveel drankjes je ook hebt, ik zet ze hier als namen in een array
    const kegNames = Object.keys(totalBeforeKegs);

    // We loopen over alle dranknamen, en voor iedere dranknaam halen we de bijbehorende data uit het voor- en natellings object
    // Zo creeeren we één array met objecten erin die alle tellingen per drankje bevat!
    return kegNames.map((beverage) => {
        // bereken alle data over deze drank (we krijgen een object terug)
        // console.log(totalBeforeKegs[beverage])
        // console.log(totalAfterKegs[beverage])


        const result = calculateKegTotals(beverage, totalBeforeKegs[beverage], totalAfterKegs[beverage]);

        // console.log(result)
        // console.log(beverage)
        // console.log(totalBeforeKegs[beverage])
        // console.log(totalAfterKegs[beverage])


        // voeg alle data, rauw en berekend samen in een object
        return {
            name: beverage,
            beforeKegs: totalBeforeKegs[beverage],
            afterKegs: totalAfterKegs[beverage],
            ...result,
        }
    });

}