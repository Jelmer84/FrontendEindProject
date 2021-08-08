const kegContent = {
    Fust_Jilz: 20,
    Fust_Radler: 20,
    Fust_Pils: 50
}

const drinksPerLiter = {
    Fust_Jilz: 4.6,
    Fust_Radler: 4.6,
    Fust_Pils: 4.6,
}
const coinsPerConsumption = {
    Fust_Jilz: 1,
    Fust_Radler: 1,
    Fust_Pils: 1,
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