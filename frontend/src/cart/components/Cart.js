//@ts-nocheck
import React, { useReducer } from 'react'
import { useAddCartItem } from '../store/cart-async-dispatchs'

export const Cart = () => {
    const [cartState, dispatch] = useReducer(cartReducer, cart)

    const addItem = () => {
        useAddCartItem({ dispatch, type: 'add_cart_item' })
    }

    return (
        <div>
            <CartList cartList={cartState.list} />
            <section>
                <span>valor do pedido: {}</span>
                <span>Taxa de entrega: {}</span>
                <span>Total da compra: {}</span>
                <span></span>
            </section>
            <footer>
                <button>Fazer pedido</button>
            </footer>
        </div>
    )
}

export const CartList = (props) => {
    return (
        <header>
            {props.cartList.map((cartItem) => (
                <CartCard cartItem={cartItem} />
            ))}
        </header>
    )
}

export const CartCard = (props) => {
    const cartItem = props.cartItem
    return (
        <div>
            <div>
                <h3>{cartItem.title}</h3>
                <button>X</button>
            </div>
            <div>
                <div>
                    <button>-</button>
                    <span>{cartItem.qty}</span>
                    <button>+</button>
                </div>
                <div>
                    <p>Valor</p>
                    <span>{cartItem.price}</span>
                </div>
            </div>
        </div>
    )
}
