import { toDouble } from '../../app/utils/number-double'
import { createCartItemfromDb } from './cart-items'

export const createCart = ({
    id,
    items = [],
    orderPrice = 0,
    deliveryFee = 0,
    purchasePrice = 0,
}) => {
    const calculateOrderPrice = () => {
        const calculatedOrderPrice = items.reduce(
            (acc, item) => acc + item.getAmount(),
            0
        )

        orderPrice = toDouble(calculatedOrderPrice, 2)
    }

    const calculatePurchasePrice = () => {
        const calculatePurchasePrice = orderPrice + deliveryFee
        purchasePrice = toDouble(calculatePurchasePrice, 2)
    }

    const getId = () => id
    const getItems = () => items
    const getOrderPrice = () => orderPrice
    const getDeliveryFee = () => deliveryFee
    const getPurchasePrice = () => purchasePrice

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

export const createCartToDb = (cart) => ({
    cart_id: cart.getId(),
    cart_order_price: cart.getOrderPrice(),
    cart_delivery_Fee: cart.getDeliveryFee(),
    cart_purchase_Price: cart.getPurchasePrice(),
})

export const createCartFromDb = (cartDb, cartItemsDb) =>
    createCart({
        id: cartDb.cart_id,
        items: cartItemsDb.map((item) => createCartItemfromDb(item)),
        orderPrice: cartDb.cart_order_price,
        deliveryFee: cartDb.cart_deliveryFee,
        purchasePrice: cartDb.cart_purchasePrice,
    })
