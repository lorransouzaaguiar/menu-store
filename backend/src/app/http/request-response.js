const status = {
    SUCESS: 'success',
    FAIL: 'fail',
    ERROR: 'error',
}

export const httpResponse = () => {
    const ok = {
        statusCode: 200,
        body: (data) => ({
            status: status.SUCESS,
            data: data,
        }),
    }

    const serverError = {
        statusCode: 500,
        body: (data = null) => ({
            status: status.ERROR,
            data,
        }),
    }

    const invalidParams = {
        statusCode: 400,
        body: (data) => ({
            status: status.FAIL,
            data,
        }),
    }

    return Object.freeze({ ok, serverError, invalidParams })
}
