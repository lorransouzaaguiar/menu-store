import { toDouble } from '../../app/utils/number-double'

export const CartItem = ({ id, product, qty = 0, amount = 0 }) => {
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

export const CartItemfromDb = (cartItemDb) =>
    CartItem({
        id: cartItemDb.cart_item_cart_id,
        product: {
            id: cartItemDb.cart_item_product_id,
            price: cartItemDb.product_price,
        },
        qty: cartItemDb.cart_item_qty,
        amount: cartItemDb.cart_item_amount,
    })
