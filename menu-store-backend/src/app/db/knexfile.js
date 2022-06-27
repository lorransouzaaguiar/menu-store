/**
 * @type { import("knex").Knex.Config }
 */
const config = {
    client: 'mysql2',
    connection: {
        host: process.env.MYSQL_HOST,
        // @ts-ignore
        port: parseInt(process.env.MYSQL_PORT),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB_NAME,
    },
    pool: {
        min: 2,
        max: 5,
    },
    seeds: {
        directory: './seeds',
    },
    migrations: {
        directory: './migrations',
        tableName: 'knex_migrations',
    },
}

export default config

export const { client, connection, migrations, seeds } = config
