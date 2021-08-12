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
    //Inhoud fusten in liters
    const literKeg = kegContent[beverage];

    // Voortelling fusten in liters
    const countKegLitersBefore = beforeKeg;

    //Natelling fusten in liters
    const countKegLitersAfter = afterKegs;

    //Verschillen fusten in liters
    const differenceKegsTotal = countKegLitersBefore - countKegLitersAfter;

    // Berekening consumpties & munten van consumpties van de fusten
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