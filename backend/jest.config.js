export default {
    testMatch: ['**/test/**/*.test.js'],
    setupFiles: ['dotenv/config'],
    setupFilesAfterEnv: ['./knex-config-jest.js'],
    moduleNameMapper: {
        '^@root(.*)$': '<rootDir>/src$1',
        '^@App(.*)$': '<rootDir>/src/app$1',
        '^@Category(.*)$': '<rootDir>/src/category$1',
        '^@Product(.*)$': '<rootDir>/src/product$1',
        '^@Cart(.*)$': '<rootDir>/src/cart$1',
    },
}
