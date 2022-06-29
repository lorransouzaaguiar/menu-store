import { toCollection } from '@Cart/dto/cart-collections'
import { Cart, CartFromDb, CartToDb } from '@Cart/entities/cart'
import { CartItem } from '@Cart/entities/cart-items'
import { cartRepository } from '@Cart/repository'

const cartItemMock = {
    id: 1,
    product: {
        id: 1,
        price: 2.83,
    },
    qty: 0,
    amount: 0,
}

const cartMock = {
    id: 1,
    items: [],
    order_price: 0,
    delivery_fee: 0,
    purchase_price: 0,
}

describe('Testing Cart', () => {
    describe('Cart', () => {
        it('should calculate order price', () => {
            const cartItem1 = CartItem(cartItemMock)
            cartItem1.incrementQty()
            cartItem1.incrementQty()
            const cartItem2 = CartItem({ ...cartItemMock, id: 2 })
            cartItem2.incrementQty()
            cartItem2.incrementQty()
            cartItem2.incrementQty()

            const cart = Cart({ ...cartMock, items: [cartItem1, cartItem2] })
            cart.calculateOrderPrice()
            expect(cart.getOrderPrice()).toBe(14.15)
        })
    })
    describe.only('CartItem', () => {
        it('should increment qty', () => {
            const item = CartItem({ ...cartItemMock })
            item.incrementQty()
            item.incrementQty()
            expect(item.getQty()).toBe(2)
        })

        it('should calculate amount when increment qty', () => {
            const item = CartItem({ ...cartItemMock })
            item.incrementQty()
            item.incrementQty()
            item.incrementQty()
            expect(item.getAmount()).toBe(8.49)
        })

        it('should decrement qty', () => {
            const item = CartItem({ ...cartItemMock, qty: 2 })
            item.decrementQty()
            expect(item.getQty()).toBe(1)
        })

        it('should calculate amount when decrement qty', () => {
            const item = CartItem({ ...cartItemMock, qty: 5 })
            item.decrementQty()
            item.incrementQty()
            expect(item.getAmount()).toBe(14.15)
        })

        it.skip('update', async () => {
            const { cartId, itemId } = { cartId: 1, itemId: 1 }
            const repo = cartRepository()
            const itemDb = await (await repo.getOneItem(cartId, itemId))[0]
            console.log(itemDb)
            const cartItem = CartItem({
                id: itemDb.cart_item_cart_id,
                product: {
                    id: itemDb.cart_item_product_id,
                    price: itemDb.product_price,
                },
                qty: itemDb.cart_item_qty,
                amount: itemDb.cart_item_amount,
            })
            cartItem.incrementQty()
            console.log(cartItem.getProduct().id)
            console.log(await repo.updateOneItem(cartItem))
            console.log(await (await repo.getCartWithAllItems(cartId))[0])
        })

        it.skip('update', async () => {
            const { cartId, itemId } = { cartId: 1, itemId: 3 }
            const repo = cartRepository()
            try {
                const cartDbWithAllItems = await repo.getCartWithAllItems(
                    cartId
                )
                const cart = CartFromDb(
                    cartDbWithAllItems[0],
                    cartDbWithAllItems
                )

                const cartItem = cart
                    .getItems()
                    .find((item) => item.getProduct().id === itemId)

                cartItem.incrementQty()
                cart.calculateOrderPrice()
                cart.calculatePurchasePrice()

                const cartToDb = CartToDb(cart)

                await repo.updateOneItem(cartItem)
                await repo.updateCart(cartToDb)

                const updatedCartDbWithAllItems =
                    await repo.getCartWithAllItems(cartId)

                const cartJson = toCollection(updatedCartDbWithAllItems)

                console.log(cartJson)
            } catch (error) {
                console.log(error)
            }
        })
    })
})
