import {
    asyncActionDecrementCartItem,
    asyncActionFetchCart,
    asyncActionIncrementCartItem,
} from '@Cart/store/async-actions'
import { cartReducer, cartState } from '@Cart/store/cart-reducer'
import { createContext, useCallback, useReducer } from 'react'

export const CartContext = createContext({})

export const CartProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, cartState)

    const increment = useCallback((url) => {
        asyncActionIncrementCartItem(dispatch, { type: 'FETCH_CART' }, url)
    })

    const decrement = useCallback((url) => {
        asyncActionDecrementCartItem(dispatch, { type: 'FETCH_CART' }, url)
    })

    const fetchCartData = useCallback(() => {
        asyncActionFetchCart(dispatch, { type: 'FETCH_CART' }, 1)
    })

    return (
        <CartContext.Provider
            value={{ state, fetchCartData, increment, decrement }}
        >
            {props.children}
        </CartContext.Provider>
    )
}
