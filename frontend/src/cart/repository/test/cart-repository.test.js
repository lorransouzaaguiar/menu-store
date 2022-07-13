import { cartRepository } from '../cart-repository'

it('aaaaaaa', async () => {
    const repo = cartRepository()
    console.log(await repo.getCart(1))
    console.log(await repo.getCart(2))
    console.log(
        await repo.incrementCartItem('http://localhost:4000/cart/1/item/1/inc')
    )
})
