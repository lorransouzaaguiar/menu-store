import config from '@App/db/knexfile'
import knex from 'knex'
import { beforeAll } from '@jest/globals'

// runs knex seeds before all tests
beforeAll(async () => {
    await knex({
        ...config,
        seeds: {
            directory: './src/app/db/seeds',
        },
    }).seed.run()
})
