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
    // hoeveel liters van deze drank zitten er in een fles/krat/fust/tank?

    //INHOUD FUSTEN EN TANKBIER
    const literTank = tankContent.Tankbier;

    // VOORTELLING FUSTEN EN TANKBIER
    const countTankLitersBefore = beforeTank;

    //NATELLING FUSTEN EN TANKBIER
    const countTankLitersAfter = afterTank;

    //VERSCHILLEN FUSTEN EN TANKBIER
    const differenceTankTotal = countTankLitersBefore - countTankLitersAfter;

    // BEREKENING DRANK & COINS FUSTEN EN TANKBIER
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