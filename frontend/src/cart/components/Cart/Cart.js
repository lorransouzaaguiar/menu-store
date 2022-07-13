//@ts-nocheck
import { cartReducer, cartState } from '@Cart/store/cart-reducer.js'
import React, { useReducer } from 'react'

import {
    asyncActionDecrementCartItem,
    asyncActionFetchCart,
    asyncActionIncrementCartItem,
} from '@Cart/store/async-actions'

/** @typedef {import('../../store/cart-reducer').CartStateType} CartStateType */
/** @typedef {import('../../store/cart-reducer').CartItemType} CartItemType */

export default function Cart() {
    const [state, dispatch] = useReducer(cartReducer, cartState)
    asyncActionFetchCart(dispatch, { type: 'FETCH_CART' }, 1)

    const incrementItem = (url) => {
        asyncActionIncrementCartItem(dispatch, { type: 'FETCH_CART' }, url)
    }
    const decrementItem = (url) => {
        console.log(url)
        asyncActionDecrementCartItem(dispatch, { type: 'FETCH_CART' }, url)
    }

    return (
        <div>
            <CartItemList
                cartItems={state.items}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
            />
            <footer data-testid="cartFooter">
                <span>valor do pedido: {state.orderPrice}</span>
                <span>Taxa de entrega: {state.deliveryFee}</span>
                <span>Total da compra: {state.purchasePrice}</span>
                <div>
                    <button>Fazer pedido</button>
                </div>
            </footer>
        </div>
    )
}

/** @param {{ cartItems: CartItemType[], incrementItem: () => void, decrementItem: () => void }} props */
export const CartItemList = (props) => {
    return !props.cartItems ? (
        'carregando...'
    ) : (
        <div data-testid="cartList">
            {props.cartItems.map((cartItem) => (
                <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    incrementItem={props.incrementItem}
                    decrementItem={props.decrementItem}
                />
            ))}
        </div>
    )
}

/** @param {{ cartItem: CartItemType, incrementItem: () => void, decrementItem: () => void }} props */
export const CartItem = (props) => {
    return (
        <div data-testid={`cartItem`}>
            <div>
                <h3>{props.cartItem.title}</h3>
                <button>X</button>
            </div>
            <div>
                <div>
                    <button
                        data-testid={`dec ${props.cartItem.id}`}
                        onClick={() =>
                            props.decrementItem(
                                props.cartItem.getDecrementUrl()
                            )
                        }
                    >
                        -
                    </button>
                    <span data-testid={`item-${props.cartItem.id}-qty`}>
                        {props.cartItem.qty}
                    </span>
                    <button
                        data-testid={`inc ${props.cartItem.id}`}
                        onClick={() => {
                            props.incrementItem(
                                props.cartItem.getIncrementUrl()
                            )
                        }}
                    >
                        +
                    </button>
                </div>
                <div>
                    <p>Valor</p>
                    <span>{props.cartItem.price.amount}</span>
                </div>
            </div>
        </div>
    )
}
