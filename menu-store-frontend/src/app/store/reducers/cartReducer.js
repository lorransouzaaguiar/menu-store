import CartModel from  '../../model/cartModel'

const cartReducer = (state, action) => {
    const {calcPriceByItem, calcSubtotal, calcTotal} = new CartModel()
    const {products, deliveryFee} = state.cart
    const item = action.payload
    const index = products.findIndex(prod => prod.id === item.id)
    const copyItem = products[index]

    switch(action.type){
        
        case 'ADD_ITEM' : {
            if(index < 0) {
                products.push({...item, qty: 1, totalPriceByItem: item.price})
                console.log('taxa de entrega ' + deliveryFee)
                return {
                    ...state, 
                    cart: {
                        ...state.cart,
                        products: [...products.reverse()], 
                        subtotal: calcSubtotal(products), 
                        purchaseFee: calcTotal(products, deliveryFee)
                    }
                }
            }else {
                copyItem.qty++;
                copyItem.totalPriceByItem = calcPriceByItem(copyItem.price, copyItem.qty)
                products[index] = copyItem
                return {
                    ...state, 
                    cart: {
                        ...state.cart,
                        products: [...products], 
                        subtotal: calcSubtotal(products), 
                        purchaseFee: calcTotal(products, deliveryFee)
                    }
                }
            } 
        }
        case 'DECREMENT_ITEM' : {
            copyItem.qty--;
            copyItem.totalPriceByItem = calcPriceByItem(copyItem.price, copyItem.qty)
            if(copyItem.qty === 0){
                const newCart = products.filter(prod => prod.qty >= 1)
                return {
                    ...state, 
                    cart: {
                        ...state.cart,
                        products: [...newCart], 
                        subtotal: calcSubtotal(products), 
                        purchaseFee: calcTotal(products, deliveryFee)
                    }
                }
            }else{
                return {
                    ...state, 
                    cart: {
                        ...state.cart,
                        products: [...products], 
                        subtotal: calcSubtotal(products), 
                        purchaseFee: calcTotal(products, deliveryFee)
                    }
                }
            }
        }
        case 'REMOVE_ITEM': {
            copyItem.qty = 0
            copyItem.totalPriceByItem = 0
            const newCart = products.filter(prod => prod.qty >= 1)
            return {
                ...state, 
                cart: {
                    ...state.cart,
                    products: [...newCart], 
                    subtotal: calcSubtotal(products), 
                    purchaseFee: calcTotal(products, deliveryFee)
                }
            }
        }
        default: return state
    }
}

export default cartReducer