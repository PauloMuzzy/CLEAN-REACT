module.exports = {
  roots: ['<roorDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnviroment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}