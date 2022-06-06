import { createContext, useReducer } from "react";
import reducers from "./reducers";

export const Store = createContext()

const initialState = {
    products: {'molho': [],'hashi': []},
    cart: {
        products: [],
        subtotal: 0,
        deliveryFee: 4,
        purchaseFee: 0,
    },
    user: {
        current: undefined,
        data: {}
    },
    menu: {
        tabIndex: 0,
    }
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducers, initialState)

    return (
        <Store.Provider value={{state, dispatch}}>
            {children}
        </Store.Provider>
    )
}

export default Provider

