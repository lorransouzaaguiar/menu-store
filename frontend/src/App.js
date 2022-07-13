import React from 'react'
import style from './App.module.css'
import MenuPage from '@Menu/page/MenuPage.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetailsPage from '@Menu/page/ProductDetailsPage'

function App() {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <Routes>
                    <Route path="/" element={<MenuPage />} />
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
