import calculateTankTotals from "../calculateBeverageTotals/calculateTankTotals";

export function createTankData(data) {
    const {
        before: {totalTanks: totalBeforeTanks},
        after: {totalTanks: totalAfterTanks}
    } = data;

    const result = calculateTankTotals("Tankbier", totalBeforeTanks.Tankbier, totalAfterTanks.Tankbier);

    return {
        name: "Tankbier",
        beforeTanks: totalBeforeTanks.Tankbier,
        afterTanks: totalAfterTanks.Tankbier,
        ...result,
    }
}