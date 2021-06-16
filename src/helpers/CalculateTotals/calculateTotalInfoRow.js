function calculateTotalsInfoRow (calculatedBeverageValues, infoProp ) {
    return calculatedBeverageValues.reduce(function (accumulator, calculatedBeverageValue) {
        console.log(calculatedBeverageValues)
        return accumulator + calculatedBeverageValue[infoProp]
    }, 0)
}

export default calculateTotalsInfoRow;
// calculatedBeverageValues is de array
// infoProp is de variable die je optelt zodat het werkt voor alle mogelijkheden (props)