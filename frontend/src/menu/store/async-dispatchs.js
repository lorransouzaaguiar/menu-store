import { categoryRepository } from '../../menu/repository/category-repository'
import { useFetch } from '../../shared/hooks/useFetch'

export const useFetchCategories = (handle) => {
    const { getCategories } = categoryRepository()
    useFetch(getCategories, handle)
}
