import axios from 'axios'

export const cartRepository = () => {
    const addItem = async () => {
        /* const response = await axios({
            method: 'post',
            url: '',
            headers: { 'Content-Type': 'application/json' },
        })
        return response.data */
        return Promise.resolve('cart')
    }

    return { addItem }
}
