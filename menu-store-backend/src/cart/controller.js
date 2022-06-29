import { httpResponse } from '@App/http/request-response'
import { cartRepository } from '@Cart/repository'
import { JsonCartCollection } from '@Cart/dto/cart-collections'
import { createCartFromDb, createCartToDb } from '@Cart/entities/cart'

export const cartController = () => {
    const { ok, serverError } = httpResponse()
    const repo = cartRepository()

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    const createCart = (req, res) => {
        const { body } = req
        return repo
            .createCart(body)
            .then((response) =>
                res.status(ok.statusCode).send(ok.body(response[0]))
            )
            .catch((error) =>
                res.status(serverError.statusCode).send(serverError.body(error))
            )
    }

    const addItem = (req, res) => {
        const { body } = req
        return repo
            .addOneItem(body)
            .then((response) =>
                res.status(ok.statusCode).send(ok.body(response[0]))
            )
            .catch((_) =>
                res.status(serverError.statusCode).send(serverError.body())
            )
    }

    const deleteItem = (req, res) => {
        const { id } = req.params

        return repo
            .deleteOneItem(id)
            .then((response) =>
                res.status(ok.statusCode).send(ok.body(response))
            )
            .catch((error) => res.status(serverError.statusCode).send(error))
    }

    const getWithAllItems = (req, res) => {
        const { id } = req.params

        return repo
            .getCartWithAllItems(id)
            .then((response) => {
                const cart = JsonCartCollection(response)
                return res.status(ok.statusCode).send(ok.body({ cart }))
            })
            .catch((error) => res.status(serverError.statusCode).send(error))
    }

    const incrementItemQty = async (req, res) => {
        const { cartId, itemId } = req.params
        try {
            const cartDbWithAllItems = await repo.getCartWithAllItems(cartId)
            const cart = createCartFromDb(
                cartDbWithAllItems[0],
                cartDbWithAllItems
            )

            const cartItem = cart
                .getItems()
                .filter((item) => item.getProduct().id == itemId)[0]

            cartItem.incrementQty()
            cart.calculateOrderPrice()
            cart.calculatePurchasePrice()

            const cartToDb = createCartToDb(cart)

            await repo.updateOneItem(cartItem)
            await repo.updateCart(cartToDb)

            const updatedCartDbWithAllItems = await repo.getCartWithAllItems(
                cartId
            )

            const cartJson = JsonCartCollection(updatedCartDbWithAllItems)
            return res.status(ok.statusCode).send(ok.body({ cartJson }))
        } catch (error) {
            return res.status(serverError.statusCode).send(error)
        }
    }

    const decrementItemQty = async (req, res) => {
        const { cartId, itemId } = req.params
        try {
            const cartDbWithAllItems = await repo.getCartWithAllItems(cartId)
            const cart = createCartFromDb(
                cartDbWithAllItems[0],
                cartDbWithAllItems
            )

            const cartItem = cart
                .getItems()
                .filter((item) => item.getProduct().id == itemId)[0]

            cartItem.decrementQty()
            cart.calculateOrderPrice()
            cart.calculatePurchasePrice()

            const cartToDb = createCartToDb(cart)

            await repo.updateOneItem(cartItem)
            await repo.updateCart(cartToDb)

            const updatedCartDbWithAllItems = await repo.getCartWithAllItems(
                cartId
            )

            const cartJson = JsonCartCollection(updatedCartDbWithAllItems)
            return res.status(ok.statusCode).send(ok.body({ cartJson }))
        } catch (error) {
            return res.status(serverError.statusCode).send(error)
        }
    }

    return Object.freeze({
        createCart,
        addItem,
        deleteItem,
        getWithAllItems,
        incrementItemQty,
        decrementItemQty,
    })
}
