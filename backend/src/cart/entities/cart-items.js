import { toDouble } from '../../app/utils/number-double'

/**@typedef {{id: number; product: any; qty: number; amount: number}} createCartItemParams*/
/** @typedef {{  incrementQty: () => void;  decrementQty: () => void;  getId: () => number; getQty: () => number; getProduct: () => any;  getAmount: () => number}} createCartItemResult */

/**
 * @param {createCartItemParams} cartItem
 * @return {createCartItemResult}
 * */
export const createCartItem = ({ id, product, qty = 0, amount = 0 }) => {
    const incrementQty = () => {
        qty++
        updateAmount()
    }
    const decrementQty = () => {
        if (qty <= 0) {
            qty = 0
            amount = 0
            return
        }

        qty--
        updateAmount()
    }

    const updateAmount = () => {
        const calculateAmount = product.price * qty
        amount = toDouble(calculateAmount, 2)
    }

    const getQty = () => qty
    const getAmount = () => amount
    const getProduct = () => product
    const getId = () => id

    return Object.freeze({
        incrementQty,
        decrementQty,
        getId,
        getQty,
        getProduct,
        getAmount,
    })
}

export const createCartItemfromDb = (cartItemDb) =>
    createCartItem({
        id: cartItemDb.cart_item_cart_id,
        product: {
            id: cartItemDb.cart_item_product_id,
            price: cartItemDb.product_price,
            imageUrl: cartItemDb.product_image_url,
        },
        qty: cartItemDb.cart_item_qty,
        amount: cartItemDb.cart_item_amount,
    })

export const createCartItemToDb = (cartItem) => ({
    cart_item_cart_id: cartItem.getId(),
    cart_item_product_id: cartItem.getProduct().id,
    cart_item_qty: cartItem.getQty(),
    cart_item_amount: cartItem.getAmount(),
})
