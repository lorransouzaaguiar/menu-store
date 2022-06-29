import axios from 'axios'

export const categoryRepository = () => {
    const getCategories = async () => {
        const response = await axios({
            method: 'get',
            url: `http://localhost:${'8081'}/categories/products`,
            headers: { 'Content-Type': 'application/json' },
        })
        return response.data
    }

    return { getCategories }
}
