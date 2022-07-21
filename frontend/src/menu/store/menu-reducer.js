//@ts-nocheck

/** @typedef {{id: number, description: string, products: []}} CategoryType */
/** @typedef {{categories: [];}} MenuStateType*/

/**@type {MenuStateType} */
export const menuState = {
    categories: [],
}

/** @returns {MenuStateType} */
export const menuReducer = (/**@type {MenuStateType} */ state, action) => {
    switch (action.type) {
        case 'FETCH_MENU': {
            /**@type {[]} */
            const categoriesFromApi = action.payload

            const categories = categoriesFromApi.map((category) => {
                const products = category.products.map((product) => {
                    const price = product.price.toFixed(2).replace('.', ',')
                    return { ...product, price: `R$ ${price}` }
                })
                return { ...category, products }
            })

            return {
                ...state,
                categories,
            }
        }
    }
}
