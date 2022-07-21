/**
 * @typedef {{
 *     id: number
 *     title: string
 *     price: { value: number; amount: number }
 *     qty: number
 *     getIncrementUrl: () => string
 *     getDecrementUrl: () => string
 * }} CartItemType
 */

/**
 * @typedef {{
 *     items: CartItemType[]
 *     orderPrice: number
 *     deliveryFee: number
 *     purchasePrice: number
 * }} CartStateType
 */

/** @returns {CartStateType} */
export const cartState = {
    id: null,
    items: [],
    orderPrice: 0,
    deliveryFee: 0,
    purchasePrice: 0,
}

/**@returns {CartStateType} */
export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_CART': {
            const cartFromApi = action.payload

            const viewPrice = (number) =>
                `R$ ${number.toFixed(2).replace('.', ',')}`

            const items = cartFromApi.items.map((item) => {
                const value = viewPrice(item.price.value)
                const amount = viewPrice(item.price.amount)
                return { ...item, price: { value, amount } }
            })

            return {
                ...state,
                items,
                orderPrice: viewPrice(cartFromApi.orderPrice),
                deliveryFee: viewPrice(cartFromApi.deliveryFee),
                purchasePrice: viewPrice(cartFromApi.purchasePrice),
            }
        }
    }
}
