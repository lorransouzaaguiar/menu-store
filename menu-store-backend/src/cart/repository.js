import db from '@App/db/connection'

const CART_TABLE = 'carts'
const CART_ITEM_TABLE = 'cart_items'
const PRODUCTS_TABLE = 'products'

export const cartRepository = () => {
    const createCart = (data) => db.insert(data).into(CART_TABLE)

    const updateCart = (cartData) =>
        db(CART_TABLE).where('cart_id', cartData.cart_id).update(cartData)

    const getOneCart = (cartId) =>
        db.select('*').from(CART_TABLE).where('cart_id', cartId)

    const addOneItem = (data) => db.insert(data).into(CART_ITEM_TABLE)

    const updateOneItem = (cartItem) =>
        db(CART_ITEM_TABLE)
            .where('cart_item_cart_id', cartItem.getId())
            .andWhere('cart_item_product_id', cartItem.getProduct().id)
            .update({
                cart_item_qty: cartItem.getQty(),
                cart_item_amount: cartItem.getAmount(),
            })

    const getOneItem = (cartId, itemId) =>
        db
            .select('cart_items.*', 'product_price')
            .from(CART_ITEM_TABLE)
            .join(PRODUCTS_TABLE, 'cart_item_product_id', 'product_id')
            .where('cart_item_cart_id', cartId)
            .andWhere('cart_item_product_id', itemId)

    const deleteOneItem = (id) =>
        db(CART_ITEM_TABLE).where('id', parseInt(id)).delete()

    const getCartWithAllItems = (id) =>
        db
            .select(
                'cart_items.*',
                ' carts.*',
                'product_id',
                'product_title',
                'product_price'
            )
            .from(CART_ITEM_TABLE)
            .join(CART_TABLE, 'cart_item_cart_id', 'cart_id')
            .join('products', 'product_id', 'cart_item_product_id')
            .where('cart_item_cart_id', parseInt(id))

    return Object.freeze({
        createCart,
        updateCart,
        getOneCart,
        getCartWithAllItems,
        deleteOneItem,
        addOneItem,
        updateOneItem,
        getOneItem,
    })
}
