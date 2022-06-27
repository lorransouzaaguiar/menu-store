import request from 'supertest'
import app from '@App/index'

export const runRouteIntegrationCrudTests = (
    baseUrl,
    contextName,
    dataMock,
    expectValidationError,
    dataMockError
) => {
    describe(`testing integration ${contextName} controller`, () => {
        describe('insert(POST)', () => {
            it(`should return status code 200 if insert ${contextName} with correct values`, async () => {
                await request(app)
                    .post(baseUrl)
                    .set('Content-type', 'application/json')
                    .send(dataMock)
                    .then(async (response) => {
                        //console.log(response.body)
                        expect(response.body.status).toBe('success')
                        expect(response.body.data).toBeTruthy()
                        return request(app).delete(
                            baseUrl + `/${response.body.data}`
                        )
                    })
            })
            it('should return status code 400 if request body has invalid values', async () => {
                await request(app)
                    .post(baseUrl)
                    .set('Content-type', 'application/json')
                    .send(dataMockError)
                    .then(async (response) => {
                        //console.log(response.body)
                        expect(response.body.status).toBe('fail')
                        expect(response.body.data).toEqual(
                            expectValidationError
                        )
                    })
            })
            it.todo('should return status code 500 if database throws error')
        })
        describe('update(PUT)', () => {
            it(`should return status code 200 if update ${contextName} with correct values`, async () => {
                const post = await request(app)
                    .post(baseUrl)
                    .set('Content-type', 'application/json')
                    .send(dataMock)

                await request(app)
                    .put(baseUrl + `/${post.body.data}`)
                    .send(dataMock)
                    .expect(200)
                    .then((response) => {
                        /*  console.log(response.body) */
                        expect(response.body.status).toBe('success')
                        expect(response.body.data).toBeTruthy()
                        return request(app).delete(
                            baseUrl + `/${post.body.data}`
                        )
                    })
            })
            it('should return status code 400 if request body has invalid values', async () => {
                await request(app)
                    .put(baseUrl + `/1`)
                    .set('Content-type', 'application/json')
                    .send(dataMockError)
                    .then(async (response) => {
                        //console.log(response.body)
                        expect(response.body.status).toBe('fail')
                        expect(response.body.data).toEqual(
                            expectValidationError
                        )
                    })
            })
            it.todo('should return status code 500 if database throws error')
        })
        describe('remove(DELETE)', () => {
            it(`should return status code 200 if delete ${contextName} with correct id`, async () => {
                await request(app)
                    .post(baseUrl)
                    .set('Content-type', 'application/json')
                    .send(dataMock)
                    .then((response) => {
                        return request(app)
                            .delete(baseUrl + `/${response.body.data}`)
                            .expect(200)
                            .then((response) => {
                                expect(response.body.status).toBe('success')
                                expect(response.body.data).toBe(1)
                            })
                    })
            })
            it('should return status code 400 if id was not a number', async () => {
                await request(app)
                    .delete(baseUrl + `/null`)
                    .set('Content-type', 'application/json')
                    .expect(400)
                    .then(async (response) => {
                        //console.log(response.body)
                        expect(response.body.status).toBe('fail')
                        expect(response.body.data).toEqual({
                            id: 'The element is required',
                        })
                    })
            })
            it.todo('should return status code 500 if database throws error')
        })
        /* describe('select(GET)', () => {
            it(`should get ${contextName} using limit and offset`, async () => {
                const postIds = []
                for (let i = 0; i < 2; i++) {
                    const response = await request(app)
                        .post(baseUrl)
                        .send(dataMock)
                    postIds.push(response.body.data)
                }

                await request(app)
                    .get(baseUrl + '/limit/2/offset/0')
                    .expect(200)
                    .then((response) => {
                        expect(response.body.status).toBe('success')
                        expect(response.body.data).toHaveLength(2)
                    })

                for (let i = 0; i < 2; i++) {
                    await request(app).delete(baseUrl + `/${postIds[i]}`)
                }
            })
        }) */
    })
}
