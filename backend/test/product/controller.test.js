import { productController } from '@Product/controller'
import { runRouteIntegrationCrudTests } from '../utils/integration-routes'
import request from 'supertest'
import app from '@App/index'

const baseUrl = '/products'
const contextName = 'product'

const dataMock = {
    title: 'title_test',
    price: 22,
    qtyStock: 55,
    description: 'desc_test',
    category_id: 1,
}

const dataMockError = {
    title: '',
    price: undefined,
    qtyStock: undefined,
    description: '',
    category_id: undefined,
}

const expectValidationError = {
    title: 'The element is required',
    price: 'The element is required',
    qtyStock: 'The element is required',
    category_id: 'The element is required',
}

const { getByCategory } = productController()

/* runRouteIntegrationCrudTests(
    baseUrl,
    contextName,
    dataMock,
    expectValidationError,
    dataMockError
) */

describe('select(GET) ', () => {
    it('it should return 200 if product has been filtered by category slug', async () => {
        await request(app).get(baseUrl + '/categories/molho')

        // console.log(await getByCategory({ params: { slug: 'molho' } }))
    })
})
