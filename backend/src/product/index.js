import { val, validate } from '@lorransouzaaguiar/scheval'

export const createProduct = ({ id, ...product }) => {
    const schema = {
        title: val(product.title).string().isRequired(),
        price: val(product.price).number().isRequired(),
        qtyStock: val(product.qtyStock).number().isRequired(),
        description: val(product.description).string(),
        imageUrl: product.imageUrl,
        categoryId: val(product.category_id).number().isRequired(),
    }

    if (id) {
        return validate({
            id: val(id).string().isRequired(),
            ...schema,
        })
    }

    return validate(schema)
}

export const createProductFromDb = (productDb) => ({
    id: productDb.product_id,
    title: productDb.product_title,
    price: productDb.product_price,
    qty: productDb.product_qtyStock,
    description: productDb.product_description,
    imageUrl: productDb.product_image_url,
    categoryId: productDb.product_category_id,
})

export const createProductToDb = (product) => ({
    product_id: product.id,
    product_title: product.title,
    product_price: product.price,
    product_qtyStock: product.qtyStock,
    product_description: product.description,
    product_image_url: product.imageUrl,
    product_category_id: product.categoryId,
})
