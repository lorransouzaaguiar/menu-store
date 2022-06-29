//@ts-nocheck

import { Category, Product, Menu } from '../models/menu'

export const menuState = {
    drinkCategories: [],
    menuCategories: [],
}

export const menuReducer = (state, action) => {
    switch (action.type) {
        case 'populate_menu': {
            const categoriesFromApi = action.payload

            const categories = categoriesFromApi.data.map((category) => {
                const products = category.products.map((product) =>
                    Product(product)
                )
                return Category({ ...category, products })
            })

            const menu = Menu(categories)

            return {
                ...state,
                drinkCategories: menu.getDrinkCategories(),
                menuCategories: menu.getMenuCategories(),
            }
        }
    }
}
