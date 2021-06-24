function reduceTotals(units, initialState) {
    const totalUnits = units.reduce((accumulator, unit) => {
            Object.keys(initialState).forEach(brand => {
                accumulator = {
                    ...accumulator,
                    [brand]: accumulator[brand] + unit[brand],
                };
            })
            return accumulator
        }, initialState)
    return totalUnits
}

export default reduceTotals