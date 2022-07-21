import { menuReducer, menuState } from '../menu-reducer'

const mockCategoriesApiData = [
    {
        id: 1,
        description: 'molho',
        products: [
            { id: 1, title: 'p1', description: '', price: 22.83 },
            { id: 2, title: 'p2', description: '', price: 44.51 },
        ],
    },
    {
        id: 2,
        description: 'bebidas',
        products: [
            { id: 1, title: 'p1', description: '', price: 12.6 },
            { id: 2, title: 'p2', description: '', price: 33.3 },
        ],
    },
]

describe('Testing Menu Reducer', () => {
    it('it should return the list of drinks and list of menu', async () => {
        const action = {
            type: 'FETCH_MENU',
            payload: mockCategoriesApiData,
        }
        const state = menuReducer(menuState, action)

        expect(state.categories[0].description).toBe('molho')
        expect(state.categories[0].products).toHaveLength(2)
        expect(state.categories[1].description).toBe('bebidas')
        expect(state.categories[1].products).toHaveLength(2)
    })
})
