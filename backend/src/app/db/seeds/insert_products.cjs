/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    //await knex('products').del()
    return await knex('products').insert([
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
        {
            product_id: 5,
            product_title: 'Sushi',
            product_price: 2.6,
            product_qtyStock: 55,
            product_description: 'unidade',
            product_category_id: 4,
            product_image_url:
                'https://firebasestorage.googleapis.com/v0/b/online-menu-8d3ee.appspot.com/o/sushi.jpg?alt=media&token=5693a9b7-8466-4d6e-a23b-44d966129fda',
        },
        {
            product_id: 6,
            product_title: 'Sashimi',
            product_price: 2.6,
            product_qtyStock: 55,
            product_description: 'unidade',
            product_category_id: 4,
            product_image_url:
                'https://firebasestorage.googleapis.com/v0/b/online-menu-8d3ee.appspot.com/o/sashimi.jpg?alt=media&token=d72d9020-28dd-4128-86c0-ba5ec90a1a6e',
        },
        {
            product_id: 7,
            product_title: 'Tempura',
            product_price: 2.6,
            product_qtyStock: 55,
            product_description: 'unidade',
            product_category_id: 4,
            product_image_url:
                'https://firebasestorage.googleapis.com/v0/b/online-menu-8d3ee.appspot.com/o/tempura.jpg?alt=media&token=c556cd81-f776-4fa4-a165-a57b813a03a5',
        },
    ])
}
