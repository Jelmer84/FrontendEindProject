const tankContent = {
    Tankbier: 1000
}

const drinksPerLiter = {
    Tankbier: 4.6
}

const coinsPerConsumption = {
    Tankbier: 1
}

function calculateTankTotals(beverage, beforeTank, afterTank) {
    //Inhoud tankbier in liters
    const literTank = tankContent.Tankbier;

    // Voortelling tankbier in liters
    const countTankLitersBefore = beforeTank;

    //Natelling tankbier in liters
    const countTankLitersAfter = afterTank;

    //Verschillen tankbier in liters
    const differenceTankTotal = countTankLitersBefore - countTankLitersAfter;

    // Berekening consumpties & munten van consumpties van de tankbier
    const totalDrinksTanks = (differenceTankTotal * drinksPerLiter.Tankbier).toFixed(1);
    const totalCoinsTanks = ((differenceTankTotal * drinksPerLiter.Tankbier) * coinsPerConsumption.Tankbier).toFixed(1);

    return {
        literTank,
        countTankLitersBefore,
        countTankLitersAfter,
        differenceTankTotal,
        totalDrinksTanks,
        totalCoinsTanks
    }
}

export default calculateTankTotals;