import React from 'react'
import style from './AppBar.module.css'

export default function AppBar() {
    return (
        <nav className={style.appBar}>
            <ul className={style.menu}>
                <li className={style.menuItem}>
                    <a className={style.link} href="#">
                        Cardápio
                    </a>
                </li>
                <li className={style.menuItem}>
                    <a className={style.link} href="#">
                        Promoções
                    </a>
                </li>
                <li className={style.menuItem}>
                    <a className={style.link} href="#">
                        Carrinho
                    </a>
                </li>
            </ul>
        </nav>
    )
}
