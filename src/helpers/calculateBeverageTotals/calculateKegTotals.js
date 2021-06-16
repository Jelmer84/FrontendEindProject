const kegContent = {
    Jilz: 20,
    Radler: 20,
    Pils: 50
}

const drinksPerLiter = {
    Jilz: 4.6,
    Radler: 4.6,
    Pils: 4.6,
}
const coinsPerConsumption = {
    Jilz: 1,
    Radler: 1,
    Pils: 1,
}

function calculateKegTotals(beverage, beforeKeg, afterKegs) {
    // hoeveel liters van deze drank zitten er in een fles/krat/fust/tank?


    //INHOUD FUSTEN EN TANKBIER
    const literKeg = kegContent[beverage];

    // VOORTELLING FUSTEN EN TANKBIER
    const countKegLitersBefore = beforeKeg;

    //NATELLING FUSTEN EN TANKBIER
    const countKegLitersAfter = afterKegs;

    //VERSCHILLEN FUSTEN EN TANKBIER
    const differenceKegsTotal = countKegLitersBefore - countKegLitersAfter;

    // BEREKENING DRANK & COINS FUSTEN EN TANKBIER
    const totalDrinksKegs = differenceKegsTotal * drinksPerLiter[beverage];
    const totalCoinsKegs = (differenceKegsTotal * drinksPerLiter[beverage]) * coinsPerConsumption[beverage];

    return {
        literKeg,
        countKegLitersBefore,
        countKegLitersAfter,
        differenceKegsTotal,
        totalDrinksKegs,
        totalCoinsKegs,
    }
}

export default calculateKegTotals;