import { useEffect } from 'react'

export const useFetch = (repositoryMethod, dispatch, action) => {
    useEffect(() => {
        repositoryMethod()
            .then((data) => {
                dispatch({ ...action, payload: data })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
}
