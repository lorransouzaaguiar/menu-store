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
    qty: data.cart_item_qty,
    _links: {
        'increment-qty': `${process.env.API_URI}/cart/${data.cart_id}/item/${data.product_id}/inc`,
        'decrement-qty': `${process.env.API_URI}/cart/${data.cart_id}/item/${data.product_id}/dec`,
    },
})

export const JsonCartCollection = (dataDb) => {
    const cartData = dataDb[0]
    const cartItems = dataDb.map((data) => JsonCartItems(data))
    return JsonCart(cartData, cartItems)
}
