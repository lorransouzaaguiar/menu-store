export default {
    clearMocks: true,
    testMatch: [
        '**/test/**/*.test.js',
        '**/cart/**/test/*.test.js',
        '**/menu/**/test/*.test.js',
    ],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@root(.*)$': '<rootDir>/src$1',
        '^@Menu(.*)$': '<rootDir>/src/menu$1',
        '^@Cart(.*)$': '<rootDir>/src/cart$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['./src/test/setupTests.js'],
}
