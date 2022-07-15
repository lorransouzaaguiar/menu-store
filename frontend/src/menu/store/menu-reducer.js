//@ts-nocheck

/** @typedef {{id: number, description: string, products: []}} CategoryType */
/** @typedef {{drinks: {}, menu: [], onSale: {}}} MenuStateType*/

/**@type {MenuStateType} */
export const menuState = {
    drinks: {},
    menu: [],
    onSale: {},
}

/** @returns {MenuStateType} */
export const menuReducer = (/**@type {MenuStateType} */ state, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES': {
            const categoriesFromApi = action.payload

            const drinks = categoriesFromApi.filter(
                (category) => category.description === 'bebidas'
            )[0]

            const menu = categoriesFromApi.filter(
                (category) =>
                    category.description !== 'bebidas' &&
                    category.description !== 'promoção'
            )

            const onSale = categoriesFromApi.filter(
                (category) => category.description === 'promoção'
            )[0]

            return {
                ...state,
                drinks,
                menu,
                onSale,
            }
        }
    }
}
