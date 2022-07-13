import { menuReducer, menuState } from '../menu-reducer'

const mockCategoriesApiData = [
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
]

describe('Testing Menu Reducer', () => {
    it('it should return the list of drinks and list of menu', async () => {
        const action = {
            type: 'FETCH_CATEGORIES',
            payload: mockCategoriesApiData,
        }
        const state = menuReducer(menuState, action)
        console.log(state)
        expect(state.drinks.description).toBe('bebidas')
        expect(state.drinks.products).toHaveLength(2)
        expect(state.menu[0].description).toBe('molho')
        expect(state.menu[0].products).toHaveLength(2)
    })
})
