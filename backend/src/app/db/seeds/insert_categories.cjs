/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    /* await knex('products').del()
    await knex('categories').del() */
    return await knex('categories').insert([
        { category_id: 1, category_description: 'molho' },
        { category_id: 2, category_description: 'hashi' },
        { category_id: 3, category_description: 'bebidas' },
        { category_id: 4, category_description: 'promoção' },
    ])
}
