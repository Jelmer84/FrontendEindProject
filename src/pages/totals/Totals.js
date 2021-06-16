import React, { useEffect, useState } from "react";
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
import combined from "../../helpers/fakeData/combined.json"
import calculateAll from '../../helpers/calculateAll';


function Totals() {
  const [tableValues, setTableValues] = useState({
    cratesBottles: [],
    kegs: [],
    tanks: {},
    totalCratesBottlesDrinks: 0,
    totalCratesBottlesCoins: 0,
    totalKegsDrinks: 0,
    totalKegsCoins: 0,
    allCountedDrinks: 0,
    allCountedCoins: 0,
    alcoholicCoins: 0,
    differenceCoins: 0,
    differenceEuro: 0,
    percentageAlcohol: 0,
    percentageSoda: 0,
  });

  useEffect(() => {
    setTableValues(calculateAll());
    console.log(calculateAll());
  }, []);

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
        {tableValues && <>
          {tableValues.cratesBottles.map((calculatedCrateBottle) => {
            return <BeverageRow {...calculatedCrateBottle} key={calculatedCrateBottle.name}/>
          })}

          <HeaderBetween title="Fusten"/>
          {tableValues.kegs.map((calculatedKeg) => {
            return <BeverageRowKegs {...calculatedKeg} key={calculatedKeg.name}/>
          })}
          <HeaderBetween title="Tankbier"/>
          <BeverageRowTank {...tableValues.tanks} key={tableValues.tanks.name}/>

          <HeaderInfo/>


          <InfoRow
            titleOne="Totaal aantal Drankjes"
            titleTwo="Verschil in Euro's"
            titleThree="Weekdag"


            // TOTAAL DRANKJES
            calculationOne={tableValues.allCountedDrinks}

            // VERSCHIL IN MUNTEN
            calculationTwo={tableValues.differenceCoins}

            //Weekday
            calculationThree={combined.weekday}


          />

          <InfoRow
            titleOne="Verwachte Munten"
            titleTwo="Tapverlies S.P."
            titleThree="Event"

            // HIER VERWACHTE MUNTEN IN VERWERKEN
            calculationOne={tableValues.allCountedCoins}

            // TAPVERLIES SP = VERSCHIL IN EURO'S * 2/3'
            calculationTwo={tableValues.differenceEuro}
            calculationThree={combined.event}
          />

          <InfoRow
            titleOne="Ingeleverde Munten"
            titleTwo="% Alcohol"
            titleThree="Studentenpartij"
            calculationOne={combined.after.totalCoins.Coins}
            calculationTwo={tableValues.percentageAlcohol}
            calculationThree={combined.studentParty}
          />

          <InfoRow
            titleOne="Verschil in Munten"
            titleTwo="% Fris"

            //HIER VERSCHIL MUNTEN IN VERWERKEN
            calculationOne={tableValues.differenceCoins}
            calculationTwo={tableValues.percentageSoda}
          />
        </>
        }
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



