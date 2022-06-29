import { genericRepository } from '@App/repository/generic-repository'

const TABLE = 'products'

export const productRepository = () => {
    const generic = genericRepository(TABLE, 'product_id')

    return Object.freeze({
        ...generic,
    })
}
