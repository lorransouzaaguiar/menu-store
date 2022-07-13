import { useEffect } from 'react'
/**
 * @param {{ repositoryMethod: () => Promise<any>; dataToCall: any }} repository
 * @param {import('react').DispatchWithoutAction} dispatch
 * @param {{ type: string }} action
 */
export const useFetch = (
    { repositoryMethod, dataToCall } = repository,
    dispatch,
    action
) => {
    useEffect(() => {
        repositoryMethod(dataToCall)
            .then((data) => {
                dispatch({ ...action, payload: data })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
}
