module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/stories/**',
    '!**/vendor/**',
  ],
  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
