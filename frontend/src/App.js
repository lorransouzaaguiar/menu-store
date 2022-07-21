import React from 'react'
import styles from './App.module.css'
import MenuPage from '@Menu/page/MenuPage/MenuPage.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetailsPage from '@Menu/page/ProductDetailsPage/ProductDetailsPage.js'
import OnSalePage from '@Menu/page/OnSalePage/OnSalePage'
import CartPage from '@Cart/page/CartPage/CartPage'
import CartDeliveryPage from '@Cart/page/CartDeliveryPage/CartDeliveryPage.js'
import SignUpAdressPage from '@Cart/page/SignUpAdressPage/SignUpAdressPage'
import { CartProvider } from '@Cart/context/cart-context'
import { MenuProvider } from '@Menu/context/menu-context'
import AppRoute from '@App/components/AppRoute/AppRoute'

function App() {
    return (
        <MenuProvider>
            <CartProvider>
                <div className={styles.app}>
                    <AppRoute />
                </div>
            </CartProvider>
        </MenuProvider>
    )
}
export default App
