const API_URI = process.env.API_URI + process.env.PORT

const JsonCart = (cartData, cartItems) => ({
    id: cartData.cart_id,
    items: cartItems,
    'order-price': cartData.cart_order_price,
    'delivery-fee': cartData.cart_delivery_fee,
    'purchase-price': cartData.cart_purchase_price,
})

const JsonCartItems = (data) => ({
    id: data.product_id,
    title: data.product_title,
    price: {
        value: data.product_price,
        amount: data.cart_item_amount,
    },
    imageUrl: data.product_image_url,
    qty: data.cart_item_qty,
    _links: {
        'increment-qty': `${API_URI}/cart/${data.cart_id}/item/${data.product_id}/inc`,
        'decrement-qty': `${API_URI}/cart/${data.cart_id}/item/${data.product_id}/dec`,
    },
})

export const JsonCartCollection = (dataDb) => {
    const cartData = dataDb[0]
    const cartItems = dataDb.map((data) => JsonCartItems(data))
    return JsonCart(cartData, cartItems)
}
