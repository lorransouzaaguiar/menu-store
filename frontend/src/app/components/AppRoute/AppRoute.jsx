import CartDeliveryPage from '@Cart/page/CartDeliveryPage/CartDeliveryPage'
import CartPage from '@Cart/page/CartPage/CartPage'
import SignUpAdressPage from '@Cart/page/SignUpAdressPage/SignUpAdressPage'
import MenuPage from '@Menu/page/MenuPage/MenuPage'
import OnSalePage from '@Menu/page/OnSalePage/OnSalePage'
import ProductDetailsPage from '@Menu/page/ProductDetailsPage/ProductDetailsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoute() {
    //return <MenuPage />
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuPage />} />
                <Route path="/onSale" element={<OnSalePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/delivery" element={<CartDeliveryPage />} />
                <Route path="/signUpAdress" element={<SignUpAdressPage />} />
                <Route path="/products" element={<ProductDetailsPage />}>
                    <Route path=":productId" element={<ProductDetailsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
