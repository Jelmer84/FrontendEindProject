import React from "react";


import countTankPerFridge from "../../helpers/fakeData/countStudentsPerFridge/countTanksPerFridge.json"
import countTankTotal from "../../helpers/fakeData/countStudentsTotal/countTanksTotal.json"

function TankRowStudent({beverage}) {

    return (
        <tr>
            <td>{beverage}</td>
            <td>{countTankPerFridge[0][beverage]}</td>
            <td>{countTankPerFridge[1][beverage]}</td>
            <td>{countTankTotal[0][beverage]}</td>
        </tr>
    )
}

export default TankRowStudent