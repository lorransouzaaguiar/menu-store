import { cartRepository } from '../repository/cart-repository'
import { useFetch } from '../../shared/hooks/useFetch'

const useAddCartItem = (handle) => {
    const { addItem } = cartRepository()
    useFetch(addItem, handle)
}

export { useAddCartItem }
