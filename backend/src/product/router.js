import express from 'express'
import { productController } from '@Product/controller'

const productsRouter = express.Router()
const {
    getByLimitOffset,
    insertOne,
    removeOne,
    updateOne,
    getByCategories,
    getByCategory,
} = productController()

productsRouter.post('/', insertOne)
productsRouter.route('/:id').delete(removeOne).put(updateOne)
productsRouter.get('/:limit/:offset', getByLimitOffset)
//productsRouter.get('/categories/:limit/:offset', getByCategories)

export { productsRouter }
