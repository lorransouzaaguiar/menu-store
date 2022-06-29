/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    //await knex('products').del()
    await knex('products').insert([
        {
            product_id: 1,
            product_title: 'Shoyu Light',
            product_price: 2.6,
            product_qtyStock: 55,
            product_description: 'unidade',
            product_category_id: 1,
        },
        {
            product_id: 2,
            product_title: 'Shoyu Comum',
            product_price: 2.6,
            product_qtyStock: 55,
            product_description: 'unidade',
            product_category_id: 1,
        },
        {
            product_id: 3,
            product_title: 'Água Sem Gás',
            product_price: 2.6,
            product_qtyStock: 55,
            product_description: 'unidade',
            product_category_id: 3,
        },
        {
            product_id: 4,
            product_title: 'Água com Gás',
            product_price: 2.6,
            product_qtyStock: 55,
            product_description: 'unidade',
            product_category_id: 3,
        },
    ])
}
