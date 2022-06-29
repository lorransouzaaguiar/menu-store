export default {
    clearMocks: true,
    testMatch: ['**/test/**/*.test.js'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@root(.*)$': '<rootDir>/src$1',
        '^@Menu(.*)$': '<rootDir>/src/menu$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
}
