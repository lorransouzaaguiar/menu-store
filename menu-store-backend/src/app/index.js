import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { productsRouter } from '@Product/router'
import { categoriesRouter } from '@Category/router'
import { cartRouter } from '@Cart/router'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)
app.use('/cart', cartRouter)

export default app
