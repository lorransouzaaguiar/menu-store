/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    //await knex('cart_items').del()
    //await knex('carts').del()
    await knex('carts').insert([
        {
            cart_id: 1,
            cart_order_price: 0,
            cart_delivery_fee: 0,
            cart_purchase_price: 0,
        },
        {
            cart_id: 2,
            cart_order_price: 0,
            cart_delivery_fee: 0,
            cart_purchase_price: 0,
        },
        {
            cart_id: 3,
            cart_order_price: 0,
            cart_delivery_fee: 0,
            cart_purchase_price: 0,
        },
    ])
}
