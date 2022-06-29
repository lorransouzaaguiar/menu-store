export default {
    clearMocks: true,
    testMatch: ["**/src/**/*.test.js"],
    testEnvironment: 'jsdom',
    moduleNameMapper: {"\\.(css|less|scss|sass)$": "identity-obj-proxy"},
    //setupFilesAfterEnv: ['./mocks/jest.setup.js']
}