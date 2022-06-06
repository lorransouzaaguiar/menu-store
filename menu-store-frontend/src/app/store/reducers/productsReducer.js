const productsReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCTS' :   {
            const products = action.payload
            return {
                ...state,
                products : products
            }
        }
        default : return state  
    }
}

export default productsReducer