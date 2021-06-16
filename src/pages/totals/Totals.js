import React, {useEffect, useState} from "react";
import styles from "../../components/Totals/Totals.module.css";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import HeaderCrateBottle from "../../components/Totals/HeaderCrateBottle";
import HeaderAll from "../../components/Totals/HeaderAll";
import BeverageRow from "../../components/Totals/BeverageRow";
import HeaderBetween from "../../components/Totals/HeaderBetween";
import BeverageRowKegs from "../../components/Totals/BeverageRowKegs";
import BeverageRowTank from "../../components/Totals/BeverageRowTank";
import HeaderInfo from "../../components/Totals/HeaderInfo";
import InfoRow from "../../components/Totals/InfoRow";
import {createCrateBottleData} from "../../helpers/createBeverageData/createCrateBottleData";
import {createKegData} from "../../helpers/createBeverageData/createKegData";
import {createTankData} from "../../helpers/createBeverageData/createTankData";
import calculateTotalsInfoRow from "../../helpers/CalculateTotals/calculateTotalInfoRow";
import combined from "../../helpers/fakeData/combined.json"


function Totals() {
    const [calculatedCratesBottles, setCalculatedCratesBottles] = useState([])
    const [calculatedKegs, setCalculatedKegs] = useState([])
    const [calculatedTanks, setCalculatedTanks] = useState([])

    const [totalDrinksCrateBottle, setTotalDrinksCrateBottle] = useState(0)
    const [totalDrinksKegs, setTotalDrinksKegs] = useState(0)

    const [totalDrinksCrateBottleCoins, setTotalDrinksCrateBottleCoins] = useState(0)
    const [totalDrinksKegsCoins, setTotalDrinksKegsCoins] = useState(0)

    const allDrinksAdded = totalDrinksCrateBottle + totalDrinksKegs + parseInt(calculatedTanks.totalDrinksTanks)
    const allCoinsAdded = totalDrinksCrateBottleCoins + totalDrinksKegsCoins + parseInt(calculatedTanks.totalCoinsTanks)
    const differenceCoins = allCoinsAdded - combined.after.totalCoins.Coins
    const coinsPrice = 1.90
    const differenceEuro = (differenceCoins * coinsPrice).toFixed(2)

    // @Todo hier zit de error
    const {totalCoins: coinsDespo} = calculatedCratesBottles.find((calculatedCrateBottle) => {
        return calculatedCrateBottle.name === "Desperados"
    })
    const percentageAlcohol = (100 * ((totalDrinksKegsCoins + parseInt(calculatedTanks.totalCoinsTanks) + coinsDespo) / allCoinsAdded)).toFixed(2) + "%"
    const percentageSoda = (100 * (1 - (totalDrinksKegsCoins + parseInt(calculatedTanks.totalCoinsTanks) + coinsDespo) / allCoinsAdded)).toFixed(2) + "%"


    console.log(coinsDespo.totalCoins)


    console.log(totalDrinksCrateBottleCoins, "MUNTEN????")

    useEffect(() => {
        setCalculatedCratesBottles(createCrateBottleData())
        setCalculatedKegs(createKegData())
        setCalculatedTanks(createTankData())

    }, [])

    useEffect(() => {
        if (calculatedCratesBottles.length > 0) {
            setTotalDrinksCrateBottle(calculateTotalsInfoRow(calculatedCratesBottles, 'totalDrinks'));
            setTotalDrinksCrateBottleCoins(calculateTotalsInfoRow(calculatedCratesBottles, 'totalCoins'));
        }
    }, [calculatedCratesBottles])

    useEffect(() => {
        if (calculatedKegs.length > 0) {
            setTotalDrinksKegs(calculateTotalsInfoRow(calculatedKegs, 'totalDrinksKegs'));
            setTotalDrinksKegsCoins(calculateTotalsInfoRow(calculatedKegs, 'totalCoinsKegs'));
        }
    }, [calculatedKegs])


    console.log(calculatedCratesBottles)

    return (
        <>
            <table border="2" id="table-to-xls">
                <thead>
                <tr>
                    <th className={styles.text} colSpan="18">Berekeningen Tellingen</th>
                </tr>
                <tr>
                    <th className={styles.headerOne} rowSpan="2">Drank / Per krat / Inhoudsmaat</th>
                    <th className={styles.headerOne} colSpan="2">Inhoud ltr</th>
                    <th className={styles.headerOne} colSpan="2">Voortelling</th>
                    <th className={styles.headerOne} colSpan="3">Liters Voor</th>
                    <th className={styles.headerOne} colSpan="2">Natelling</th>
                    <th className={styles.headerOne} colSpan="3">Liters Na</th>
                    <th className={styles.headerOne} colSpan="3">Liters Verschil</th>
                    <th className={styles.headerOne} colSpan="2">Berekening</th>
                </tr>

                <tr>
                    <th className={styles.headerTwo}>Per krat</th>
                    <th className={styles.headerTwo}>Per fles</th>
                    <HeaderCrateBottle/>
                    <HeaderCrateBottle/>
                    <HeaderAll/>
                    <HeaderCrateBottle/>
                    <HeaderCrateBottle/>
                    <HeaderAll/>
                    <HeaderCrateBottle/>
                    <HeaderAll/>
                    <th className={styles.headerTwo}>Drankjes</th>
                    <th className={styles.headerTwo}>Munten</th>
                </tr>
                </thead>

                <tbody>
                {calculatedCratesBottles.map((calculatedCrateBottle) => {
                    return <BeverageRow {...calculatedCrateBottle} key={calculatedCrateBottle.name}/>
                })}

                <HeaderBetween title="Fusten"/>
                {calculatedKegs.map((calculatedKeg) => {
                    return <BeverageRowKegs {...calculatedKeg} key={calculatedKeg.name}/>
                })}
                <HeaderBetween title="Tankbier"/>
                <BeverageRowTank {...calculatedTanks} key={calculatedTanks.name}/>

                <HeaderInfo/>


                <InfoRow
                    titleOne="Totaal aantal Drankjes"
                    titleTwo="Verschil in Euro's"
                    titleThree="Weekdag"


                    // TOTAAL DRANKJES
                    calculationOne={allDrinksAdded}

                    // VERSCHIL IN MUNTEN * MUNTPRIJS
                    calculationTwo={differenceEuro}

                    //Weekday
                    calculationThree={combined.weekday}


                />

                <InfoRow
                    titleOne="Verwachte Munten"
                    titleTwo="Tapverlies S.P."
                    titleThree="Event"

                    // HIER VERWACHTE MUNTEN IN VERWERKEN
                    calculationOne={allCoinsAdded}

                    // TAPVERLIES SP = VERSCHIL IN EURO'S * 2/3'
                    calculationTwo={((differenceCoins * coinsPrice) * (2 / 3)).toFixed(2)}
                    calculationThree={combined.event}
                />

                <InfoRow
                    titleOne="Ingeleverde Munten"
                    titleTwo="% Alcohol"
                    titleThree="Studentenpartij"
                    calculationOne={combined.after.totalCoins.Coins}
                    calculationTwo={percentageAlcohol}
                    calculationThree={combined.studentParty}
                />

                <InfoRow
                    titleOne="Verschil in Munten"
                    titleTwo="% Fris"

                    //HIER VERSCHIL MUNTEN IN VERWERKEN
                    calculationOne={differenceCoins}
                    calculationTwo={percentageSoda}
                />

                </tbody>
            </table>

            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Download as Excel"/>


        </>
    );
}

export default Totals;
