import express from 'express'

import { categoryController } from './controller.js'

const categoriesRouter = express.Router()
const {
    getByLimitOffset,
    insertOne,
    removeOne,
    updateOne,
    getManyWithProducts,
    getOneWithProducts,
} = categoryController()

categoriesRouter.get('/limit/:limit/offset/:offset', getByLimitOffset)
categoriesRouter.post('/', insertOne)
categoriesRouter.delete('/:id', removeOne)
categoriesRouter.put('/:id', updateOne)
categoriesRouter.get('/products', getManyWithProducts)
categoriesRouter.get('/:slug/products', getOneWithProducts)
export { categoriesRouter }
