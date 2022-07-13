//@ts-nocheck

/** @typedef {{id: number, description: string, products: []}} CategoryType */
/** @typedef {{drinks: {}, menu: [], }} MenuStateType*/

/**@type {MenuStateType} */
export const menuState = {
    drinks: {},
    menu: [],
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

            return {
                ...state,
                drinks,
                menu,
            }
        }
    }
}
