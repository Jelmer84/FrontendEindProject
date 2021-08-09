import React from "react";

function TankRowStudent({beverage, data}) {
    const countTankPerFridge = data.tanks;
    const countTankTotal = data.totalTanks

    return (
        <tr>
            <td>{beverage}</td>
            <td>{countTankPerFridge[0][beverage]}</td>
            <td>{countTankPerFridge[1][beverage]}</td>
            <td>{countTankTotal[beverage]}</td>
        </tr>
    );
}

export default TankRowStudent