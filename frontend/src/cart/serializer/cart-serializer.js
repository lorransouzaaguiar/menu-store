const Cart = (data) => ({
    id: data.id,
    items: data.items.map((item) => CartItem(item)),
    orderPrice: data['order-price'],
    deliveryFee: data['delivery-fee'],
    purchasePrice: data['purchase-price'],
})

const CartItem = (data) => ({
    id: data.id,
    title: data.title,
    price: data.price,
    imageUrl: data.imageUrl,
    qty: data.qty,
    getIncrementUrl: () => data._links['increment-qty'],
    getDecrementUrl: () => data._links['decrement-qty'],
})

export { Cart, CartItem }
