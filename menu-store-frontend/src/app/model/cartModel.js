function CartModel(){
     
    this.calcPriceByItem = (price, qty) => {
        let result = parseFloat(price) * qty
        return result.toFixed(2)
    }

    this.calcSubtotal = (cartProducts) => {
        let result = cartProducts.reduce((total, prod) => total + parseFloat(prod.totalPriceByItem), 0) 
        return result.toFixed(2)
    }

    this.calcTotal = (cartProducts, deliveryFee) => {
        let subtotal = parseFloat(this.calcSubtotal(cartProducts))
        let result = subtotal > 0 ? subtotal + deliveryFee : 0
        return result.toFixed(2)
    }
}

export default CartModel
