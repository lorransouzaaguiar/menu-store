import AppBar from '@App/components/AppBar/AppBar'
import Header from '@App/components/Header/Header'
import style from './CartPage.module.css'
import CartLogoSvg from '@App/assets/cart-logo.svg'
import CartCard from '@Cart/components/CartCard/CartCard'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CartPage() {
    const [state, setState] = useState(['sushi'])

    return (
        <>
            <Header />
            <AppBar />
            <section className={style.cart}>
                {!state.length ? (
                    <div className={style.header}>
                        <div className={style.logo}>
                            <img className={style.image} src={CartLogoSvg} />
                            <span className={style.title}>Carrinho Vazio</span>
                        </div>
                    </div>
                ) : (
                    <div
                        className={style.header}
                        style={{ display: 'block', padding: '8px' }}
                    >
                        <CartCard />
                    </div>
                )}
                <div className={style.footer}>
                    <div className={style.labels}>
                        <div className={style.labelWrapper}>
                            <div className={style.labelInfo}>
                                <span>Subtotal</span>
                            </div>
                            <div className={style.labelResult}>
                                <span>R$ 0</span>
                            </div>
                        </div>
                        <div className={style.labelWrapper}>
                            <div className={style.labelInfo}>
                                <span>Subtotal</span>
                            </div>
                            <div className={style.labelResult}>
                                <span>R$ 0</span>
                            </div>
                        </div>
                        <div className={style.labelWrapper}>
                            <div className={style.labelInfo}>
                                <span>Subtotal</span>
                            </div>
                            <div className={style.labelResult}>
                                <span>R$ 0</span>
                            </div>
                        </div>
                    </div>

                    <button className={style.button}>
                        <Link className={style.button} to="/delivery">
                            Continuar
                        </Link>
                    </button>
                </div>
            </section>
        </>
    )
}
