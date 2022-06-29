import db from '../db/connection'

export const genericRepository = (tableName, idColumnName) => {
    const insertOne = (data) => db.insert(data).into(tableName)

    const updateOne = (id, data) =>
        db(tableName).where(idColumnName, id).update(data)

    const removeOne = (id) =>
        db(tableName).where(idColumnName, parseInt(id)).delete()

    const getOne = (id) =>
        db.select('*').from(tableName).where(idColumnName, id)

    const getAllByLimitOffset = (limit = 20, offset = 0) =>
        db.select('*').from(tableName).limit(limit).offset(offset)

    return Object.freeze({
        insertOne,
        updateOne,
        removeOne,
        getAllByLimitOffset,
        getOne,
    })
}
