import AppBar from '@App/components/AppBar/AppBar'
import Header from '@App/components/Header/Header'
import style from './CartPage.module.css'
import CartLogoSvg from '@App/assets/cart-logo.svg'
import CartButton from '@Cart/components/CartButton/CartButton'
import React, { useContext } from 'react'

import CartItem from '@Cart/components/CartItem/CartItem'
import { CartContext } from '@Cart/context/cart-context'

/** @typedef {import('../../store/cart-reducer').CartStateType} CartStateType */
/** @typedef {import('../../store/cart-reducer').CartItemType} CartItemType */

/** @param {{ cartItems: CartItemType[], incrementItem: () => void, decrementItem: () => void }} props */

export default function CartPage() {
    const { state, fetchCartData } = useContext(CartContext)
    fetchCartData()

    return (
        <>
            <Header />
            <AppBar />
            <section className={style.cart}>
                {!state.items.length ? (
                    <div className={style.header}>
                        <div className={style.logo}>
                            <img className={style.image} src={CartLogoSvg} />
                            <span className={style.title}>Carrinho Vazio</span>
                        </div>
                    </div>
                ) : (
                    <div className={style.headerWithItems}>
                        <div data-testid="cartList">
                            {state.items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                )}
                <div className={style.footer}>
                    <div className={style.labels}>
                        <div className={style.labelContainer}>
                            <div className={style.info}>
                                <span>Subtotal</span>
                            </div>
                            <div className={style.result}>
                                <span>{state.orderPrice}</span>
                            </div>
                        </div>
                        <div className={style.labelContainer}>
                            <div className={style.info}>
                                <span>Taxa de Entrega</span>
                            </div>
                            <div className={style.result}>
                                <span>{state.deliveryFee}</span>
                            </div>
                        </div>
                        <div className={style.labelContainer}>
                            <div className={style.info}>
                                <span>Taxa da Compra</span>
                            </div>
                            <div className={style.result}>
                                <span>{state.purchasePrice}</span>
                            </div>
                        </div>
                    </div>

                    <CartButton title="Continuar" to="/delivery" />
                </div>
            </section>
        </>
    )
}
