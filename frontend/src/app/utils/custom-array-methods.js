export const splitByObjectPropertyValue = (array, property, value) => {
    const array1 = array.filter(element => element[property] === value)
    const array2 = array.filter(element => element[property] !== value)
    return [array1, array2]
}