//@ts-nocheck

import { splitByObjectPropertyValue } from '../../shared/custom-array-methods'

export const menuState = {
    drinkCategories: [],
    menuCategories: [],
}

export const menuReducer = (state, action) => {
    switch (action.type) {
        case 'populate_menu': {
            const categories = action.payload
            const [drinkCategories, menuCategories] =
                splitByObjectPropertyValue(
                    categories.data,
                    'description',
                    'bebidas'
                )
            return {
                ...state,
                drinkCategories,
                menuCategories,
            }
        }
    }
}
