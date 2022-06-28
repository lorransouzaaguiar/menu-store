import { val, validate } from '@lorransouzaaguiar/scheval'

export const createCategory = ({ id, ...category }) => {
    const schema = {
        description: val(category.description).string().isRequired(),
    }
    if (id) {
        return validate({
            id: val(id).string().isRequired(),
            ...schema,
        })
    }

    return validate(schema)
}

export const createCategoryFromDb = (categoryDb) => ({
    id: categoryDb.category_id,
    description: categoryDb.category_description,
})

export const createCategoryToDb = (category) => ({
    category_id: category.id,
    category_description: category.description,
})
