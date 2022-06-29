import { val, validate } from '@lorransouzaaguiar/scheval'
import {
    createProduct,
    createProductFromDb,
    createProductToDb,
} from '@Product/index'
import { httpResponse } from '@App/http/request-response'
import { productRepository } from './repository'
import { categoryRepository } from '@Category/repository'
import { createCategoryFromDb } from '@Category/index'

export const productController = () => {
    const { invalidParams, ok, serverError } = httpResponse()
    const repo = productRepository()
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    const insertOne = (req, res) => {
        const { data, isValid, errors } = createProduct({ ...req.body })
        if (!isValid)
            return res
                .status(invalidParams.statusCode)
                .send(invalidParams.body(errors))

        const productToDb = createProductToDb(data)
        return repo
            .insertOne(productToDb)

            .then((response) =>
                res.status(ok.statusCode).send(ok.body(response[0]))
            )
            .catch((error) => res.status(serverError.statusCode).send(error))
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    const updateOne = (req, res) => {
        const { id } = req.params
        const { data, isValid, errors } = createProduct({ id, ...req.body })
        if (!isValid)
            return res
                .status(invalidParams.statusCode)
                .send(invalidParams.body(errors))

        const productToDb = createProductToDb(data)
        return repo
            .updateOne(data.id, productToDb)
            .then((response) =>
                res.status(ok.statusCode).send(ok.body(response))
            )
            .catch((_) =>
                res.status(serverError.statusCode).send(serverError.body())
            )
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
    const getByLimitOffset = async (req, res) => {
        const { limit, offset } = req.params
        const productsWithCategories = []
        const categoryRepo = categoryRepository()

        const { data, isValid, errors } = validate({
            limit: val(limit).string().isRequired(),
            offset: val(offset).string().isRequired(),
        })

        if (!isValid)
            return res
                .status(invalidParams.statusCode)
                .json(invalidParams.body(errors))

        try {
            const productsDb = await repo.getAllByLimitOffset(
                data.limit,
                data.offset
            )

            for (const productDb of productsDb) {
                const { categoryId, ...product } =
                    createProductFromDb(productDb)

                const categoryDb = await categoryRepo.getOne(categoryId)
                const category = createCategoryFromDb(categoryDb[0])
                const newProduct = {
                    ...product,
                    category,
                }

                productsWithCategories.push(newProduct)
            }

            res.status(ok.statusCode).json(ok.body(productsWithCategories))
        } catch (error) {
            res.status(serverError.statusCode).json(serverError.body())
        }
    }

    return {
        insertOne,
        updateOne,
        removeOne,
        getByLimitOffset,
    }
}
