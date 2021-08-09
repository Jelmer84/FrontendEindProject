import React from "react";

function KegRowStudent({beverage, data}) {
    const countKegsPerFridge = data.kegs;
    const countKegsTotal = data.totalKegs

    return (
        <tr>
            <td>{beverage}</td>
            <td>{countKegsPerFridge[0][beverage]}</td>
            <td>{countKegsPerFridge[1][beverage]}</td>
            <td>{countKegsTotal[beverage]}</td>
        </tr>
    );
}

export default KegRowStudent

