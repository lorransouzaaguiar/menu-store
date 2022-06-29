/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('cart_items').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('cart_items', (table) => {
                table.integer('cart_item_cart_id').unsigned()
                table
                    .foreign('cart_item_cart_id')
                    .references('cart_id')
                    .inTable('carts')
                table.integer('cart_item_product_id').unsigned()
                table
                    .foreign('cart_item_product_id')
                    .references('product_id')
                    .inTable('products')
                table.integer('cart_item_qty').notNullable()
                table.primary(['cart_item_cart_id', 'cart_item_product_id'])
            })
        }
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('cart_items')
}
