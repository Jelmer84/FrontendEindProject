import React from "react";


import countKegsPerFridge from "../../helpers/fakeData/countStudentsPerFridge/countKegsPerFridge.json"
import countKegsTotal from "../../helpers/fakeData/countStudentsTotal/countKegsTotal.json"

function KegRowStudent({beverage}) {

    return (
        <tr>
            <td>{beverage}</td>
            <td>{countKegsPerFridge[0][beverage]}</td>
            <td>{countKegsPerFridge[1][beverage]}</td>
            <td>{countKegsTotal[0][beverage]}</td>
        </tr>
    )
}

export default KegRowStudent

