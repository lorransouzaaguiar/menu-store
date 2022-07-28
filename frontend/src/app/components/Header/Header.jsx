import React from 'react'
import style from './Header.module.css'
import MenuSvg from '@App/assets/menu.svg'
export default function Header() {
    return (
        <header className={style.header}>
            <h1 className={style.title}>Sushi bus</h1>
            <img className={style.menu} src={MenuSvg} />
        </header>
    )
}
