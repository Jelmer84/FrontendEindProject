import React from "react";
import countCratesPerFridge from "../../helpers/fakeData/countStudentsPerFridge/countCratesPerFridge.json";
import countBottlesPerFridge from "../../helpers/fakeData/countStudentsPerFridge/countBottlesPerFridge.json";
import countCratesTotal from "../../helpers/fakeData/countStudentsTotal/countCratesTotal.json";
import countBottlesTotal from "../../helpers/fakeData/countStudentsTotal/countBottlesTotal.json";

function BeverageRowStudent({beverage}) {

    return (
        <tr>
            <td>{beverage}</td>
            <td>{countCratesPerFridge[0][beverage]}</td>
            <td>{countBottlesPerFridge[0][beverage]}</td>
            <td>{countCratesPerFridge[1][beverage]}</td>
            <td>{countBottlesPerFridge[1][beverage]}</td>
            <td>{countCratesPerFridge[2][beverage]}</td>
            <td>{countBottlesPerFridge[2][beverage]}</td>
            <td>{countCratesPerFridge[3][beverage]}</td>
            <td>{countBottlesPerFridge[3][beverage]}</td>
            <td>{countCratesPerFridge[4][beverage]}</td>
            <td>{countBottlesPerFridge[4][beverage]}</td>
            <td>{countCratesPerFridge[5][beverage]}</td>
            <td>{countBottlesPerFridge[5][beverage]}</td>
            <td>{countCratesPerFridge[6][beverage]}</td>
            <td>{countBottlesPerFridge[6][beverage]}</td>
            <td>{countCratesTotal[0][beverage]}</td>
            <td>{countBottlesTotal[0][beverage]}</td>
        </tr>
    )
}

export default BeverageRowStudent