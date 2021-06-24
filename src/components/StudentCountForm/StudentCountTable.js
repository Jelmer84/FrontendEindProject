import React, {useState} from "react";
import styles from './StudentCountTable.module.css'

import countCratesPerFridge from "../../helpers/fakeData/countStudentsPerFridge/countCratesPerFridge.json"



import HeaderCrateBottle from "../Totals/HeaderCrateBottle";
import HeaderFridge from "./HeaderFridge";
import BeverageRowStudent from "./BeverageRowStudent";
import HeaderBeers from "./HeaderKegs";
import BeersRowsStudent from "./BeersRowStudent";
import TankRowStudent from "./TankRowStudent";


function StudentCountTable({nameList}) {


    // const [saved, setSaved] = useState(false)
    // const [inputDisabled, setInputDisabled] = useState(false)

    // @Todo get request
    // async function onFormSubmit(combined) {
    //     try {
    //         let count = 1;
    //         const result = await axios.get(`http://localhost:8080/${count}`, combined)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    // console.log(countCrateBottle.name)

    // for (let i = 1; i <7 ; i++) {
    //
    //        return   <th  className={styles.headerOne} colSpan="2">Koeling {i}</th>
    // }

    //
    // for (let fridge = 1; fridge <= 7; fridge++) {
    //     const banaan = "koeling" + fridge
    //     console.log(banaan)
    // }

    return (
        <>
            <div>
                <p><strong>Weekdag:</strong> {countCratesPerFridge.weekday}</p>
                <p><strong>Evenement:</strong> {countCratesPerFridge.event}</p>
                <p><strong>StudentenPartij:</strong> {countCratesPerFridge.studentParty}</p>


            </div>
            <table border="2">
                <thead>
                <tr>
                    <th className={styles.text} colSpan="17">Tellijst {nameList}</th>
                </tr>
                <tr>
                    <th className={styles.headerOne} rowSpan="2">Drank / Per krat / Inhoudsmaat</th>
                    <HeaderFridge fridge="1"/>
                    <HeaderFridge fridge="2"/>
                    <HeaderFridge fridge="3"/>
                    <HeaderFridge fridge="4"/>
                    <HeaderFridge fridge="5"/>
                    <HeaderFridge fridge="6"/>
                    <HeaderFridge fridge="7"/>
                    <th className={styles.headerOne} colSpan="2">Totaal</th>
                </tr>

                <tr>
                    <HeaderCrateBottle/>
                    <HeaderCrateBottle/>
                    <HeaderCrateBottle/>
                    <HeaderCrateBottle/>
                    <HeaderCrateBottle/>
                    <HeaderCrateBottle/>
                    <HeaderCrateBottle/>
                    <HeaderCrateBottle/>
                </tr>
                </thead>

                <tbody>

                <BeverageRowStudent beverage="Water_Rood"/>
                <BeverageRowStudent beverage="Water_Blauw"/>
                <BeverageRowStudent beverage="Pepsi"/>
                <BeverageRowStudent beverage="Pepsi_Max"/>
                <BeverageRowStudent beverage="Sisi"/>
                <BeverageRowStudent beverage="Ice_Tea_Normal"/>
                <BeverageRowStudent beverage="Ice_Tea_Green_110cl"/>
                <BeverageRowStudent beverage="Ice_Tea_Green_150cl"/>
                <BeverageRowStudent beverage="Red_Bull"/>
                <BeverageRowStudent beverage="Red_Bull_Sugar_Free"/>
                <BeverageRowStudent beverage="Red_Bull_Tropical"/>
                <BeverageRowStudent beverage="Desperados"/>

                <tr>
                    <HeaderBeers title="Fusten"/>
                    <HeaderBeers title="Fusten 1"/>
                    <HeaderBeers title="Fusten 2"/>
                    <HeaderBeers title="Totaal"/>
                </tr>

                <BeersRowsStudent beverage="Fust_Jilz"/>
                <BeersRowsStudent beverage="Fust_Radler"/>
                <BeersRowsStudent beverage="Fust_Pils"/>

                <tr>
                    <HeaderBeers title="Tankbier"/>
                    <HeaderBeers title="Tankbier 1"/>
                    <HeaderBeers title="Tankbier 2"/>
                    <HeaderBeers title="Totaal"/>
                </tr>

                <TankRowStudent beverage="Tankbier"/>

                </tbody>
            </table>
        </>
    );
}

export default StudentCountTable;

