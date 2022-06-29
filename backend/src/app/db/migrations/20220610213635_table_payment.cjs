/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('payment_methods').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('payments', (table) => {
                table.increments('payment_id').primary()
                table.string('payment_description').notNullable()
            })
        }
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('payments')
}
