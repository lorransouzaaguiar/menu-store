/**
 *
 * @param {import("./menu-reducer").MenuStateType} state
 * @returns {{}}
 */
const useSelectorGetDrinks = (state) =>
    state.categories.find((category) => category.description === 'bebidas')

/**
 *
 * @param {import("./menu-reducer").MenuStateType} state
 * @returns {[]}
 */
const useSelectorGetMenu = (state) =>
    state.categories.filter(
        (category) =>
            category.description !== 'bebidas' &&
            category.description !== 'promoção'
    )

/**
 *
 * @param {import("./menu-reducer").MenuStateType} state
 * @returns {{}}
 */
const useSelectorGetOnSale = (state) =>
    state.categories.find((category) => category.description === 'promoção')

/**
 *
 * @param {import("./menu-reducer").MenuStateType} state
 * @param {number} id
 * @returns {{}}
 */
const useSelectorGetOneProduct = (state, id) => {
    for (let category of state.categories) {
        const product = category.products.find((product) => product.id == id)
        if (product) return product
    }
}

export {
    useSelectorGetDrinks,
    useSelectorGetMenu,
    useSelectorGetOnSale,
    useSelectorGetOneProduct,
}
