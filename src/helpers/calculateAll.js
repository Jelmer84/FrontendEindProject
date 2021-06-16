import { createCrateBottleData } from './createBeverageData/createCrateBottleData';
import { createKegData } from './createBeverageData/createKegData';
import { createTankData } from './createBeverageData/createTankData';
import calculateTotalsInfoRow from './CalculateTotals/calculateTotalInfoRow';
import combined from './fakeData/combined.json';

function calculateAll() {
  // Voorberekening
  const cratesBottles = createCrateBottleData();
  const kegs = createKegData();
  const tanks = createTankData();

  // Kratten en flesjes
  const totalCratesBottlesDrinks = calculateTotalsInfoRow(cratesBottles, 'totalDrinks');
  const totalCratesBottlesCoins = calculateTotalsInfoRow(cratesBottles, 'totalCoins');

  // Fusten
  const totalKegsDrinks = calculateTotalsInfoRow(kegs, 'totalDrinksKegs');
  const totalKegsCoins = calculateTotalsInfoRow(kegs, 'totalCoinsKegs');

  console.log(kegs);

  // Totale drank- en munttelling
  const allCountedDrinks = totalCratesBottlesDrinks + totalKegsDrinks + parseInt(tanks.totalDrinksTanks);
  const allCountedCoins = totalCratesBottlesCoins + totalKegsCoins + parseInt(tanks.totalCoinsTanks);
  const { totalCoins: alcoholicCoins } = cratesBottles.find((cratesBottles) => {
    return cratesBottles.name === "Desperados"
  });

  // Verschillen
  const coinsPrice = 1.90;
  // @todo letop, dit komt ineens uit de json file
  const differenceCoins = allCountedCoins - combined.after.totalCoins.Coins;
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