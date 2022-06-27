import { toDouble } from '../../app/utils/number-double'
import { CartItemfromDb } from './cart-items'

export const Cart = ({
    id,
    items = [],
    order_price = 0,
    delivery_fee = 0,
    purchase_price = 0,
}) => {
    const calculateOrderPrice = () => {
        const calculatedOrderPrice = items.reduce(
            (acc, item) => acc + item.getAmount(),
            0
        )

        order_price = toDouble(calculatedOrderPrice, 2)
    }

    const calculatePurchasePrice = () => {
        const calculatePurchasePrice = order_price + delivery_fee
        purchase_price = toDouble(calculatePurchasePrice, 2)
    }

    const getId = () => id
    const getItems = () => items
    const getOrderPrice = () => order_price
    const getDeliveryFee = () => delivery_fee
    const getPurchasePrice = () => purchase_price

    return Object.freeze({
        getId,
        getItems,
        getDeliveryFee,
        calculateOrderPrice,
        getPurchasePrice,
        getOrderPrice,
        calculatePurchasePrice,
    })
}

export const CartToDb = (cart) => ({
    cart_id: cart.getId(),
    cart_order_price: cart.getOrderPrice(),
    cart_delivery_fee: cart.getDeliveryFee(),
    cart_purchase_price: cart.getPurchasePrice(),
})

export const CartFromDb = (cartDb, cartItemsDb) =>
    Cart({
        id: cartDb.cart_id,
        items: cartItemsDb.map((item) => CartItemfromDb(item)),
        order_price: cartDb.cart_order_price,
        delivery_fee: cartDb.cart_delivery_fee,
        purchase_price: cartDb.cart_purchase_price,
    })
