import { createCrateBottleData } from "../createBeverageData/createCrateBottleData";
import { createKegData } from "../createBeverageData/createKegData";
import { createTankData } from "../createBeverageData/createTankData";
import calculateTotalsInfoRow from "../CalculateTotals/calculateTotalInfoRow";

function calculateAll(combined) {
  // Voorberekening
  const cratesBottles = createCrateBottleData(combined);
  const kegs = createKegData(combined);
  const tanks = createTankData(combined);

  // Kratten en flesjes
  const totalCratesBottlesDrinks = calculateTotalsInfoRow(cratesBottles, 'totalDrinks');
  const totalCratesBottlesCoins = calculateTotalsInfoRow(cratesBottles, 'totalCoins');

  // Fusten
  const totalKegsDrinks = calculateTotalsInfoRow(kegs, 'totalDrinksKegs');
  const totalKegsCoins = calculateTotalsInfoRow(kegs, 'totalCoinsKegs');

  // Totale drank- en munttelling
  const allCountedDrinks = totalCratesBottlesDrinks + totalKegsDrinks + parseInt(tanks.totalDrinksTanks);
  const allCountedCoins = totalCratesBottlesCoins + totalKegsCoins + parseInt(tanks.totalCoinsTanks);
  const { totalCoins: alcoholicCoins } = cratesBottles.find((cratesBottles) => {
    return cratesBottles.name === "Desperados"
  });

  // Verschillen
  const coinsPrice = 1.90;
  const differenceCoins = allCountedCoins - Number(combined.after.totalCoins.Coins);
  const differenceEuro = (differenceCoins * coinsPrice).toFixed(2);

  // Percentages
  const percentageAlcohol = (100 * ((totalKegsCoins + parseInt(tanks.totalCoinsTanks) + alcoholicCoins) / allCountedCoins)).toFixed(2) + "%"
  const percentageSoda = (100 * (1 - (totalKegsCoins + parseInt(tanks.totalCoinsTanks) + alcoholicCoins) / allCountedCoins)).toFixed(2) + "%"

  return {
    cratesBottles,
    kegs,
    tanks,
    totalCratesBottlesDrinks,
    totalCratesBottlesCoins,
    totalKegsDrinks,
    totalKegsCoins,
    allCountedDrinks,
    allCountedCoins,
    alcoholicCoins,
    differenceCoins,
    differenceEuro,
    percentageAlcohol,
    percentageSoda,
  }
}

export default calculateAll;