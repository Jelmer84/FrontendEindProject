import calculateKegTotals from "../calculateBeverageTotals/calculateKegTotals";

export function createKegData(data) {
    const {
        before:
            {totalKegs: totalBeforeKegs},
        after:
            {totalKegs: totalAfterKegs}
    } = data;

    // alle drank namen in een array
    const kegNames = Object.keys(totalBeforeKegs);

    // loop over de dranknamen, voor iedere dranknaam komt de bijbehorende data uit het voor- en natellings object. Resulteert in een 1 array met objecten die alle tellingen per drank bevat.
    return kegNames.map((beverage) => {
        const result = calculateKegTotals(beverage, totalBeforeKegs[beverage], totalAfterKegs[beverage]);

        return {
            name: beverage,
            beforeKegs: totalBeforeKegs[beverage],
            afterKegs: totalAfterKegs[beverage],
            ...result,
        }
    });

}