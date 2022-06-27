export const toDouble = (number, decimalPlaces) => {
    const stringNumber = Number.parseFloat(number).toFixed(decimalPlaces)
    return Number.parseFloat(stringNumber)
}
