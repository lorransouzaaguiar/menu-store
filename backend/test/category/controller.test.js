import { categoryController } from '@Category/controller'
import { runRouteIntegrationCrudTests } from '../utils/integration-routes'

const baseUrl = '/categories'
const contextName = 'category'

const dataMock = {
    description: 'desc_test',
}
const dataMockError = {
    description: '',
}
const expectValidationError = {
    description: 'The element is required',
}

const { get } = categoryController()

it('', async () => {
    await get().then((categories) => {
        console.log(categories)
        console.log(categories[0].products)
        console.log(categories[2].products)
    })
    //console.log(res)
})

/* runRouteIntegrationCrudTests(
    baseUrl,
    contextName,
    dataMock,
    expectValidationError,
    dataMockError
) */
