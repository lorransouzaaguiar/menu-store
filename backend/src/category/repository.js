import { genericRepository } from '@App/repository/generic-repository'

const TABLE = 'categories'

export const categoryRepository = () => {
    const generic = genericRepository(TABLE, 'category_id')

    return Object.freeze({
        ...generic,
    })
}
