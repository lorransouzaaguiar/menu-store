/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('non_logged_in').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('non_logged_in', (table) => {
                table.increments('non_logged_in_id').primary()
                table.string('non_logged_in_token').notNullable()
                table.integer('non_logged_in_cart_id').unsigned()
                table
                    .foreign('non_logged_in_cart_id')
                    .references('cart_id')
                    .inTable('carts')
            })
        }
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('non_logged_in')
}
