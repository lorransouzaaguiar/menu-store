import { cartRepository } from '../repository'
import { createCartFromDb, createCartToDb } from '../entities/cart'

/**
 * @param {number} id
 * @param {number} itemId
 */
export const decrementCartItemUseCase = async (id, itemId) => {
    const repo = cartRepository()

    const cartDbWithAllItems = await repo.getCartWithAllItems(id)
    const cart = createCartFromDb(cartDbWithAllItems[0], cartDbWithAllItems)

    const cartItem = cart
        .getItems()
        .find((item) => item.getProduct().id == itemId)

    cartItem.decrementQty()
    cart.calculateOrderPrice()
    cart.calculatePurchasePrice()

    const cartToDb = createCartToDb(cart)

    await repo.updateOneItem(cartItem)
    await repo.updateCart(cartToDb)

    const updatedCartDbWithAllItems = await repo.getCartWithAllItems(id)

    return updatedCartDbWithAllItems
}
