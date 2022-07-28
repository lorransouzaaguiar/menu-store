import React from "react"
import './menu-bar.css'

export default function MenuBar() {
    return (
        <div class='menu-bar'>
            <header>
                <img src='logo' />
            </header>
            <nav>
                <ul>
                    <li><a href="">entrar</a></li>
                    <li><a href="">cadastre-se</a></li>
                </ul>
            </nav>
            <ul>
                <li><a href="">Horário de funcionamento</a></li>
                <li><a href="">Locais de entrega</a></li>
                <li><a href="">Formas de pagamento</a></li>
                <li><a href="">Fale conosco</a></li>
            </ul>
            <footer>
                @2022
            </footer>
        </div>
    )
}