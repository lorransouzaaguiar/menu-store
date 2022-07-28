import React from 'react'
import { Link } from 'react-router-dom'
import style from './AppBar.module.css'

export default function AppBar() {
    return (
        <nav className={style.container}>
            <ul className={style.menu}>
                <li className={style.menuItem}>
                    <Link className={style.link} to="/">
                        Cardápio
                    </Link>
                </li>
                <li className={style.menuItem}>
                    <Link className={style.link} to="/onSale">
                        Promoções
                    </Link>
                </li>
                <li className={style.menuItem}>
                    <Link className={style.link} to="/cart">
                        Carrinho
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
