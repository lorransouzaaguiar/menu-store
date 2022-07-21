import { createCartItem } from '@Cart/entities/cart-items'

const cartItemMock = {
    id: 1,
    product: {
        id: 1,
        price: 2.83,
    },
    qty: 0,
    amount: 0,
}

describe('CartItem', () => {
    it('should increment qty', () => {
        const item = createCartItem({ ...cartItemMock })
        item.incrementQty()
        item.incrementQty()
        expect(item.getQty()).toBe(2)
    })

    it('should calculate amount when increment qty', () => {
        const item = createCartItem({ ...cartItemMock })
        item.incrementQty()
        item.incrementQty()
        item.incrementQty()
        expect(item.getAmount()).toBe(8.49)
    })

    it('should decrement qty', () => {
        const item = createCartItem({ ...cartItemMock, qty: 2 })
        item.decrementQty()
        expect(item.getQty()).toBe(1)
    })

    it('should calculate amount when decrement qty', () => {
        const item = createCartItem({ ...cartItemMock, qty: 5 })
        item.decrementQty()
        item.incrementQty()
        expect(item.getAmount()).toBe(14.15)
    })
})
