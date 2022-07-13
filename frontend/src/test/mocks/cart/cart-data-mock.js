const mockProduct1 = {
    id: 1,
    title: 'Shoyu Light',
    price: {
        value: 2.6,
        amount: 0,
    },
    qty: 1,
    _links: {
        'increment-qty': 'http://localhost:4000/cart/1/item/1/inc',
        'decrement-qty': 'http://localhost:4000/cart/1/item/1/dec',
    },
}

const mockProduct2 = {
    id: 2,
    title: 'Shoyu Comum',
    price: {
        value: 2.6,
        amount: 0,
    },
    qty: 0,
    _links: {
        'increment-qty': 'http://localhost:4000/cart/1/item/2/inc',
        'decrement-qty': 'http://localhost:4000/cart/1/item/2/dec',
    },
}

const mockProduct3 = {
    id: 3,
    title: 'Água Sem Gás',
    price: {
        value: 2.6,
        amount: 0,
    },
    qty: 0,
    _links: {
        'increment-qty': 'http://localhost:4000/cart/1/item/3/inc',
        'decrement-qty': 'http://localhost:4000/cart/1/item/3/dec',
    },
}

const cartMockApiResponse = {
    status: 'success',
    data: {
        cart: {
            id: 1,
            items: [mockProduct1, mockProduct2, mockProduct3],
            'order-price': 2.6,
            'delivery-fee': 0,
            'purchase-price': 2.6,
        },
    },
}

const cartMockApiResponseIncrement = {
    ...cartMockApiResponse,
    data: {
        ...cartMockApiResponse.data,
        cart: {
            ...cartMockApiResponse.data.cart,
            items: [{ ...mockProduct1, qty: 3 }, mockProduct2, mockProduct3],
            'order-price': 7.8,
            'delivery-fee': 0,
            'purchase-price': 7.8,
        },
    },
}

const cartMockApiResponseDecrement = {
    ...cartMockApiResponse,
    data: {
        ...cartMockApiResponse.data,
        cart: {
            ...cartMockApiResponse.data.cart,
            items: [{ ...mockProduct1, qty: 2 }, mockProduct2, mockProduct3],
            'order-price': 5.2,
            'delivery-fee': 0,
            'purchase-price': 5.2,
        },
    },
}

export {
    cartMockApiResponse,
    mockProduct1,
    mockProduct2,
    mockProduct3,
    cartMockApiResponseIncrement,
    cartMockApiResponseDecrement,
}
