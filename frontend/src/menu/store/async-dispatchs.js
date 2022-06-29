import { categoryRepository } from '../../menu/repository/category-repository'
import { useFetch } from '../../shared/hooks/useFetch'

export const useFetchCategories = (dispatch, action) => {
    const { getCategories } = categoryRepository()
    useFetch(getCategories, dispatch, action)
}
