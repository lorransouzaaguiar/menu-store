import React from 'react'
import styles from './App.module.css'
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
