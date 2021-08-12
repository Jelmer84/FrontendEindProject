function calculateTotalsInfoRow (calculatedBeverageValues, infoProp ) {
    return calculatedBeverageValues.reduce(function (accumulator, calculatedBeverageValue) {
        return accumulator + calculatedBeverageValue[infoProp]
    }, 0)
}

export default calculateTotalsInfoRow;
