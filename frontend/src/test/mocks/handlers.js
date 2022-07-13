import { rest } from 'msw'
import {
    cartMockApiResponse,
    cartMockApiResponseDecrement,
    cartMockApiResponseIncrement,
} from './cart/cart-data-mock'

export const handlers = [
    rest.get('http://localhost:4000/cart/1', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(cartMockApiResponse))
    }),

    rest.get('http://localhost:4000/cart/1/item/1/inc', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(cartMockApiResponseIncrement))
    }),
    rest.get('http://localhost:4000/cart/1/item/1/dec', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(cartMockApiResponseDecrement))
    }),
]
