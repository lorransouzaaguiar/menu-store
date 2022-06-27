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
