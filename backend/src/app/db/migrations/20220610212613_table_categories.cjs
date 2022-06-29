/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('categories').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('categories', (table) => {
                table.increments('category_id').primary()
                table.string('category_description').notNullable()
            })
        }
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('categories')
}
