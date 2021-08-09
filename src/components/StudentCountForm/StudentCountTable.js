import React from "react";
import styles from './StudentCountTable.module.css'
import HeaderCrateBottle from "../Totals/HeaderCrateBottle";
import HeaderFridge from "./HeaderFridge";
import BeverageRowStudent from "./BeverageRowStudent";
import HeaderBeers from "./HeaderKegs";
import BeersRowsStudent from "./BeersRowStudent";
import TankRowStudent from "./TankRowStudent";

function StudentCountTable({nameList, eventId, studentPartyId, data}) {

    return (
        <>
            <div>
                <p><strong>Weekdag:</strong> {data.selectedWeekday.weekday}</p>
                <p><strong>Evenement:</strong> {eventId}</p>
                <p><strong>StudentenPartij:</strong> {studentPartyId}</p>
            </div>

            <table border="2" id="table-to-xls">
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
                <BeverageRowStudent data={data} beverage="Water_Rood"/>
                <BeverageRowStudent data={data} beverage="Water_Blauw"/>
                <BeverageRowStudent data={data} beverage="Pepsi"/>
                <BeverageRowStudent data={data} beverage="Pepsi_Max"/>
                <BeverageRowStudent data={data} beverage="Sisi"/>
                <BeverageRowStudent data={data} beverage="Ice_Tea_Normal"/>
                <BeverageRowStudent data={data} beverage="Ice_Tea_Green_110cl"/>
                <BeverageRowStudent data={data} beverage="Ice_Tea_Green_150cl"/>
                <BeverageRowStudent data={data} beverage="Red_Bull"/>
                <BeverageRowStudent data={data} beverage="Red_Bull_Sugar_Free"/>
                <BeverageRowStudent data={data} beverage="Red_Bull_Tropical"/>
                <BeverageRowStudent data={data} beverage="Desperados"/>
                <tr>
                    <HeaderBeers title="Fusten"/>
                    <HeaderBeers title="Fusten 1"/>
                    <HeaderBeers title="Fusten 2"/>
                    <HeaderBeers title="Totaal"/>
                </tr>
                <BeersRowsStudent data={data} beverage="Fust_Jilz"/>
                <BeersRowsStudent data={data} beverage="Fust_Radler"/>
                <BeersRowsStudent data={data} beverage="Fust_Pils"/>
                <tr>
                    <HeaderBeers title="Tankbier"/>
                    <HeaderBeers title="Tankbier 1"/>
                    <HeaderBeers title="Tankbier 2"/>
                    <HeaderBeers title="Totaal"/>
                </tr>
                <TankRowStudent data={data} beverage="Tankbier"/>
                </tbody>
            </table>
        </>
    );
}

export default StudentCountTable;

