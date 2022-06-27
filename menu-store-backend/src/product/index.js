import { val, validate } from '@lorransouzaaguiar/scheval'

export const createProduct = ({ id, ...product }) => {
    const schema = {
        title: val(product.title).string().isRequired(),
        price: val(product.price).number().isRequired(),
        qtyStock: val(product.qtyStock).number().isRequired(),
        description: val(product.description).string(),
        category_id: val(product.category_id).number().isRequired(),
    }
    if (id) {
        return validate({
            id: val(id).string().isRequired(),
            ...schema,
        })
    }

    return validate(schema)
}
