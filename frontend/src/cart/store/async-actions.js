import { cartRepository } from '@Cart/repository/cart-repository.js'
import { useFetch } from '@App/hooks/useFetch.js'

const { incrementCartItem, getCart, decrementCartItem } = cartRepository()

export const asyncActionIncrementCartItem = async (dispatch, action, url) => {
    incrementCartItem(url)
        .then((resp) => {
            dispatch({ ...action, payload: resp })
        })
        .catch((err) => {
            console.log(err)
        })
}

export const asyncActionDecrementCartItem = async (dispatch, action, url) => {
    decrementCartItem(url)
        .then((resp) => {
            dispatch({ ...action, payload: resp })
        })
        .catch((err) => {
            console.log(err)
        })
}

export const asyncActionFetchCart = (dispatch, action, cartId) =>
    useFetch(
        { repositoryMethod: getCart, dataToCall: cartId },
        dispatch,
        action
    )
