/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('sales').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('sales', (table) => {
                table.integer('sale_cart_id').unsigned()
                table
                    .foreign('sale_cart_id')
                    .references('cart_id')
                    .inTable('carts')
                table.integer('sale_payment_id').unsigned()
                table
                    .foreign('sale_payment_id')
                    .references('payment_id')
                    .inTable('payments')
            })
        }
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('sale')
}
