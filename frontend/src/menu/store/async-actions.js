import { categoryRepository } from '@Menu/repository/category-repository.js'
import { useFetch } from '@App/hooks/useFetch.js'

export const asyncActionFetchMenu = (dispatch, action) => {
    const { getCategories } = categoryRepository()
    useFetch({ repositoryMethod: getCategories }, dispatch, action)
}
