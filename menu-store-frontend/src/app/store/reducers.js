import cartReducer from "./reducers/cartReducer";
import productsReducer from './reducers/productsReducer'
import userReducer from "./reducers/userReducer";

const reducers = (state, action) => {
    switch(action.reducer){
        case 'PRODUCTS' :
            return productsReducer(state, action)
        case 'CART' :
            return cartReducer(state, action)
        case 'USER' : 
            return userReducer(state, action)
        case 'MENU': 
            const index = action.payload
            state.menu.tabIndex = index
            return {...state}
        default : 
            return state
    }
}

export default reducers