import axios from 'axios'

export const categoryRepository = () => {
    const getCategories = async () => {
        const categoriesData = await axios({
            method: 'get',
            url: `http://localhost:${'4000'}/categories/products`,
            headers: { 'Content-Type': 'application/json' },
        })

        return categoriesData.data.data
    }

    return { getCategories }
}
