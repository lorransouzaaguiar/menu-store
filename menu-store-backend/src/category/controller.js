import db from '@App/db/connection'
import { val, validate } from '@lorransouzaaguiar/scheval'
import {
    createCategory,
    createCategoryFromDb,
    createCategoryToDb,
} from '@Category/index'
import { httpResponse } from '@App/http/request-response'
import { categoryRepository } from '@Category/repository'

export const categoryController = () => {
    const { invalidParams, ok, serverError } = httpResponse()
    const repo = categoryRepository()
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    const insertOne = (req, res) => {
        const { data, isValid, errors } = createCategory({ ...req.body })
        if (!isValid)
            return res
                .status(invalidParams.statusCode)
                .send(invalidParams.body(errors))

        const categoryToDb = createCategoryToDb(data)

        return repo
            .insertOne(categoryToDb)
            .then((response) =>
                res.status(ok.statusCode).send(ok.body(response[0]))
            )
            .catch((_) =>
                res.status(serverError.statusCode).send(serverError.body())
            )
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    const updateOne = (req, res) => {
        const { id } = req.params
        const { data, isValid, errors } = createCategory({ id, ...req.body })
        if (!isValid)
            return res
                .status(invalidParams.statusCode)
                .send(invalidParams.body(errors))

        const categoryToDb = createCategoryToDb(data)

        return repo
            .updateOne(data.id, categoryToDb)
            .then((response) =>
                res.status(ok.statusCode).send(ok.body(response))
            )
            .catch((err) => res.status(serverError.statusCode).send(err))
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    const removeOne = (req, res) => {
        const { id } = req.params
        const { data, isValid, errors } = validate({
            id: val(parseInt(id)).number().isRequired(),
        })
        if (!isValid)
            return res
                .status(invalidParams.statusCode)
                .send(invalidParams.body(errors))

        return repo
            .removeOne(data.id)
            .then((response) =>
                res.status(ok.statusCode).send(ok.body(response))
            )
            .catch((error) => res.status(serverError.statusCode).send(error))
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    const getByLimitOffset = (req, res) => {
        const { limit, offset } = req.params
        const { data, isValid, errors } = validate({
            limit: val(limit).string().isRequired(),
            offset: val(offset).string().isRequired(),
        })
        if (!isValid)
            return res
                .status(invalidParams.statusCode)
                .json(invalidParams.body(errors))
        return repo
            .getAllByLimitOffset(data.limit, data.offset)
            .then((categoriesDb) => {
                const categories = categoriesDb.map((categoryDb) =>
                    createCategoryFromDb(categoryDb)
                )

                res.status(ok.statusCode).json(ok.body(categories))
            })
            .catch((_) =>
                res.status(serverError.statusCode).json(serverError.body())
            )
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    const getManyWithProducts = async (req, res) => {
        const categoriesWithProducts = []

        try {
            const categoriesDb = await repo.getAllByLimitOffset()
            for (const category of categoriesDb) {
                const productsDb = await db
                    .select('*')
                    .from('products')
                    .where('product_category_id', category.category_id)
                const products = productsDb.map((product) => {
                    delete product['product_category_id']
                    return product
                })
                //console.log(products)
                categoriesWithProducts.push({
                    id: category.category_id,
                    description: category.category_description,
                    products,
                })
            }
            return res
                .status(ok.statusCode)
                .json(ok.body(categoriesWithProducts))
        } catch (error) {
            return res.status(serverError.statusCode).json(error)
        }
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    const getOneWithProducts = async (req, res) => {
        const { slug } = req.params
        try {
            const productsDB = await db
                .select('products.*')
                .from('products')
                .join('categories', 'category_id', '=', 'categories.id')
                .where('categories.description', slug)

            const categoryId = productsDB[0].category_id
            const products = productsDB.map((product) => {
                delete product['category_id']
                return product
            })
            const categoryWithProducts = {
                id: categoryId,
                description: 'molho',
                products,
            }
            //console.log(productByCategory)
            res.status(ok.statusCode).json(ok.body(categoryWithProducts))
        } catch (err) {
            //res.status(serverError.statusCode).json(serverError.body())
        }
    }

    return {
        insertOne,
        updateOne,
        removeOne,
        getByLimitOffset,
        getManyWithProducts,
        getOneWithProducts,
    }
}
