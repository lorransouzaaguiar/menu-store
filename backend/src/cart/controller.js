import { httpResponse } from '@App/http/request-response'
import { cartRepository } from '@Cart/repository'
import { JsonCartCollection } from '@Cart/dto/cart-collections'
import { incrementCartItemUseCase } from './use-cases/increment-cart-item'
import { decrementCartItemUseCase } from './use-cases/decrement-cart-item'

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
            const cartFromDb = await incrementCartItemUseCase(cartId, itemId)

            const cartJson = JsonCartCollection(cartFromDb)

            return res
                .status(ok.statusCode)
                .send(ok.body({ cart: { ...cartJson } }))
        } catch (error) {
            return res.status(serverError.statusCode).send(error)
        }
    }

    const decrementItemQty = async (req, res) => {
        const { cartId, itemId } = req.params
        try {
            const cartFromDb = await decrementCartItemUseCase(cartId, itemId)

            const cartJson = JsonCartCollection(cartFromDb)
            return res
                .status(ok.statusCode)
                .send(ok.body({ cart: { ...cartJson } }))
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
