import { menuReducer, menuState } from '../../src/menu/store/menu-reducer'

const mockCategoriesApiData = {
    status: '',
    data: [
        {
            id: 1,
            description: 'molho',
            products: [
                { id: 1, title: 'p1', description: '', price: 22 },
                { id: 2, title: 'p2', description: '', price: 44 },
            ],
        },
        {
            id: 2,
            description: 'bebidas',
            products: [
                { id: 1, title: 'p1', description: '', price: 12 },
                { id: 2, title: 'p2', description: '', price: 33 },
            ],
        },
    ],
}

describe('Testing Menu Reducer', () => {
    it('it should return the list of drinks and list of menu', async () => {
        const action = { type: 'populate_menu', payload: mockCategoriesApiData }
        const reducer = menuReducer(menuState, action)
        expect(reducer.drinkCategories[0].description).toBe('bebidas')
        expect(reducer.drinkCategories[0].products).toHaveLength(2)
        expect(reducer.menuCategories[0].description).toBe('molho')
        expect(reducer.menuCategories[0].products).toHaveLength(2)
    })
})
