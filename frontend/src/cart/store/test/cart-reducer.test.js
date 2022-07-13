import { cartRepository } from '@Cart/repository/cart-repository'
import { cart, cartReducer } from '@Cart/store/cart-reducer'

const mockCartApiData = {
    id: 1,
    items: [
        {
            id: 1,
            title: 'prod1',
            price: 22,
            qty: 0,
            getIncrementUrl: () => 'inc_link',
            getDecrementUrl: () => 'dec_link',
        },
        {
            id: 2,
            title: 'prod2',
            price: 44,
            qty: 0,
            getIncrementUrl: () => 'inc_link',
            getDecrementUrl: () => 'dec_link',
        },
    ],
    orderPrice: 0,
    deliveryFee: 0,
    purchasePrice: 0,
}

describe('Testing Cart Reducer', () => {
    it('should return update carts data', async () => {
        const action = { type: 'populate_cart', payload: mockCartApiData }
        const reducer = cartReducer(cart, action)
        expect(reducer).toEqual(mockCartApiData)
    })
})
