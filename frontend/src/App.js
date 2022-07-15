import React from 'react'
import style from './App.module.css'
import MenuPage from '@Menu/page/MenuPage/MenuPage.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetailsPage from '@Menu/page/ProductDetailsPage/ProductDetailsPage.js'
import OnSalePage from '@Menu/page/OnSalePage/OnSalePage'
import CartPage from '@Cart/page/CartPage/CartPage'
import CartDeliveryPage from '@Cart/page/CartDeliveryPage/CartDeliveryPage.js'

function App() {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <Routes>
                    <Route path="/" element={<MenuPage />} />
                    <Route path="/onSale" element={<OnSalePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/delivery" element={<CartDeliveryPage />} />
                    <Route path="/products" element={<ProductDetailsPage />}>
                        <Route
                            path=":productId"
                            element={<ProductDetailsPage />}
                        />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App
