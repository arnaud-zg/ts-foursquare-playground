module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/stories/**',
    '!**/vendor/**',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 88.64,
      lines: 91,
      statements: 93,
    },
  },
  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
