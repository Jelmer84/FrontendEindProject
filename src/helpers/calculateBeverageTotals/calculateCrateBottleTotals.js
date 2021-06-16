const crateContent = {
    Water_Rood: 13.2,
    Water_Blauw: 13.2,
    Pepsi: 13.2,
    Pepsi_Max: 13.2,
    Sisi: 13.2,
    Ice_Tea_Normal: 13.2,
    Ice_Tea_Green_110cl: 13.2,
    Ice_Tea_Green_150cl: 18,
    Red_Bull: 6,
    Red_Bull_Sugar_Free: 6,
    Red_Bull_Tropical: 3,
    Desperados: 7.92
}
const bottleContent = {
    Water_Rood: 1.1,
    Water_Blauw: 1.1,
    Pepsi: 1.1,
    Pepsi_Max: 1.1,
    Sisi: 1.1,
    Ice_Tea_Normal: 1.1,
    Ice_Tea_Green_110cl: 1.1,
    Ice_Tea_Green_150cl: 1.5,
    Red_Bull: 0.25,
    Red_Bull_Sugar_Free: 0.25,
    Red_Bull_Tropical: 0.25,
    Desperados: 0.33
}

const drinksPerLiter = {
    Desperados: 3,
    Ice_Tea_Green_110cl: 5,
    Ice_Tea_Green_150cl: 5,
    Ice_Tea_Normal: 5,
    Pepsi: 5,
    Pepsi_Max: 5,
    Red_Bull: 4,
    Red_Bull_Sugar_Free: 4,
    Red_Bull_Tropical: 4,
    Sisi: 5,
    Water_Blauw: 5,
    Water_Rood: 5,

}
const coinsPerConsumption = {
    Desperados: 2,
    Ice_Tea_Green_110cl: 1,
    Ice_Tea_Green_150cl: 1,
    Ice_Tea_Normal: 1,
    Pepsi: 1,
    Pepsi_Max: 1,
    Red_Bull: 1.5,
    Red_Bull_Sugar_Free: 1.5,
    Red_Bull_Tropical: 1.5,
    Sisi: 1,
    Water_Blauw: 1,
    Water_Rood: 1,

}

function calculateCrateBottleTotals(beverage, beforeCrate, beforeBottle, afterCrate, afterBottle) {
    // hoeveel liters van deze drank zitten er in een fles/krat/fust/tank?

    //INHOUD KRATTEN EN FLESSEN
    const literCrate = crateContent[beverage];
    const literBottle = bottleContent[beverage];

    // VOORTELLING KRATTEN EN FLESSEN
    const countCrateLitersBefore = literCrate * beforeCrate;
    const countBottleLitersBefore = literBottle * beforeBottle;
    const differenceLitersBefore = (literCrate * beforeCrate) + (literBottle * beforeBottle);

    // NATELLING KRATTEN EN FLESSEN
    const countCrateLitersAfter = literCrate * afterCrate;
    const countBottleLitersAfter = literBottle * afterBottle;
    const differenceLitersAfter = (literCrate * afterCrate) + (literBottle * afterBottle);

    //VERSCHILLEN KRATTEN EN FLESSEN
    const differenceCratesTotal = countCrateLitersBefore - countCrateLitersAfter;
    const differenceBottlesTotal = countBottleLitersBefore - countBottleLitersAfter;
    const differenceTotal = differenceCratesTotal + differenceBottlesTotal;

    // BEREKENING DRANK & COINS KRATTEN EN FLESSEN
    const totalDrinks = (differenceLitersBefore - differenceLitersAfter) * drinksPerLiter[beverage];
    const totalCoins = ((differenceLitersBefore - differenceLitersAfter) * drinksPerLiter[beverage]) * coinsPerConsumption[beverage];


    return {
        literCrate,
        literBottle,
        countCrateLitersBefore,
        countBottleLitersBefore,
        differenceLitersBefore,
        countCrateLitersAfter,
        countBottleLitersAfter,
        differenceLitersAfter,
        differenceCratesTotal,
        differenceBottlesTotal,
        differenceTotal,
        totalDrinks,
        totalCoins,

    }
}

export default calculateCrateBottleTotals;