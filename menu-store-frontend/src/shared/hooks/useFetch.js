import { useEffect } from 'react'

export const useFetch = (repositoryMethod, handle) => {
    const { dispatch, type } = handle

    useEffect(() => {
        repositoryMethod().then((data) => {
            console.log(data)
            dispatch({ ...type, payload: data })
        })
    }, [])
}
