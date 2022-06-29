import express from 'express'
import { cartController } from '@Cart/controller'

const cartRouter = express.Router()

const {
    createCart,
    addItem,
    deleteItem,
    getWithAllItems,
    incrementItemQty,
    decrementItemQty,
} = cartController()

cartRouter.post('/', createCart)
cartRouter.get('/:id', getWithAllItems)
cartRouter.post('/item', addItem)
cartRouter.delete('/item/:id', deleteItem)
cartRouter.put('/:cartId/item/:itemId/inc', incrementItemQty)
cartRouter.put('/:cartId/item/:itemId/dec', decrementItemQty)

export { cartRouter }
