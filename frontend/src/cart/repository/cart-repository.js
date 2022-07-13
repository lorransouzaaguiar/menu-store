import { Cart } from '@Cart/serializer/cart-serializer.js'
import axios from 'axios'

export const cartRepository = () => {
    const updateCartData = async (url) => {
        const response = await axios({
            method: 'get',
            url,
            headers: { 'Content-Type': 'application/json' },
        })
        const cartData = response.data.data.cart
        return Cart(cartData)
    }

    const incrementCartItem = updateCartData
    const decrementCartItem = updateCartData

    const getCart = async (id) => {
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/cart/${id}`,
            headers: { 'Content-Type': 'application/json' },
        })

        const cartData = response.data.data.cart
        //console.log(response.data)
        return Cart(cartData)
    }

    return { incrementCartItem, decrementCartItem, getCart }
}
