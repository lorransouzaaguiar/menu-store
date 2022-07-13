/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    //await knex('cart_items').del()
    return await knex('cart_items').insert([
        {
            cart_item_cart_id: 1,
            cart_item_product_id: 1,
            cart_item_qty: 0,
            cart_item_amount: 0,
        },
        {
            cart_item_cart_id: 1,
            cart_item_product_id: 2,
            cart_item_qty: 0,
            cart_item_amount: 0,
        },
        {
            cart_item_cart_id: 1,
            cart_item_product_id: 3,
            cart_item_qty: 0,
            cart_item_amount: 0,
        },
        {
            cart_item_cart_id: 2,
            cart_item_product_id: 4,
            cart_item_qty: 0,
            cart_item_amount: 0,
        },
        {
            cart_item_cart_id: 2,
            cart_item_product_id: 2,
            cart_item_qty: 0,
            cart_item_amount: 0,
        },
        {
            cart_item_cart_id: 3,
            cart_item_product_id: 3,
            cart_item_qty: 0,
            cart_item_amount: 0,
        },
        {
            cart_item_cart_id: 3,
            cart_item_product_id: 4,
            cart_item_qty: 0,
            cart_item_amount: 0,
        },
    ])
}
