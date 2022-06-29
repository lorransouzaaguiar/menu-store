/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('products').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('products', (table) => {
                table.increments('product_id').primary()
                table.string('product_title').notNullable()
                table.double('product_price').notNullable()
                table.integer('product_qtyStock').unsigned()
                table.string('product_description', 80)
                table.integer('product_category_id').unsigned()
                table
                    .foreign('product_category_id')
                    .references('category_id')
                    .inTable('categories')
            })
        }
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('products')
}
