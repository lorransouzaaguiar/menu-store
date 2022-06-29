/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('carts').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('carts', (table) => {
                table.increments('cart_id').primary()
                table.double('cart_order_price').notNullable()
                table.double('cart_delivery_fee').notNullable()
                table.double('cart_purchase_price').notNullable()
            })
        }
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('carts')
}
