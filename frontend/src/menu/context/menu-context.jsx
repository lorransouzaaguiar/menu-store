import { asyncActionFetchMenu } from '@Menu/store/async-actions'
import { menuReducer, menuState } from '@Menu/store/menu-reducer'
import { createContext, useCallback, useReducer } from 'react'

export const MenuContext = createContext({})

export const MenuProvider = ({ children }) => {
    const [state, dispatch] = useReducer(menuReducer, menuState)

    const fetchMenu = useCallback(() => {
        asyncActionFetchMenu(dispatch, { type: 'FETCH_MENU' })
    })

    return (
        <MenuContext.Provider value={{ state, fetchMenu }}>
            {children}
        </MenuContext.Provider>
    )
}
